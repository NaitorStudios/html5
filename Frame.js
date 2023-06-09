// CLO Object
// -------------------------------------------------------------------
/* Copyright (c) 1996-2012 Clickteam
 *
 * This source code is part of the HTML5 exporter for Clickteam Multimedia Fusion 2.
 *
 * Permission is hereby granted to any person obtaining a legal copy
 * of Clickteam Multimedia Fusion 2 to use or modify this source code for
 * debugging, optimizing, or customizing applications created with
 * Clickteam Multimedia Fusion 2.
 * Any other use of this source code is prohibited.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
CLO.PARENT_NONE = 0;
CLO.PARENT_FRAME = 1;
CLO.PARENT_FRAMEITEM = 2;
CLO.PARENT_QUALIFIER = 3;
function CLO()
{
	this.loHandle = 0;
	this.loOiHandle = 0;
	this.loX = 0;
	this.loY = 0;
	this.loParentType = 0;
    this.loValue = 0;
	this.loLayer = 0;
	this.loType = 0;
	this.loInstances = null;

	this.loInstances = new Array(4);
	var i;
	for (i = 0; i < 4; i++)
		this.loInstances[i] = null;
}
CLO.prototype =
{
	load:        function (file)
	{
		this.loHandle = file.readAShort();
		this.loOiHandle = file.readAShort();
		this.loX = file.readAInt();
		this.loY = file.readAInt();
		this.loParentType = file.readAShort();
		this.loValue = file.readAShort();
		this.loLayer = file.readAShort();
		file.skipBytes(2);
	},
	addInstance: function (num, bi)
	{
		this.loInstances[num] = bi;
	}
}

// CLOList object
// --------------------------------------------------------------
function CLOList()
{
	this.list = null;
	this.handleToIndex = null;
	this.nIndex = 0;
	this.loFranIndex = 0;
}
CLOList.prototype =
{
	load:            function (app)
	{
		this.nIndex = app.file.readAInt();
		this.list = new Array(this.nIndex);
		var n;
		var maxHandles = 0;
		for (n = 0; n < this.nIndex; n++)
		{
			this.list[n] = new CLO();
			this.list[n].load(app.file);
			if (this.list[n].loHandle + 1 > maxHandles)
			{
				maxHandles = this.list[n].loHandle + 1;
			}
			var pOI = app.OIList.getOIFromHandle(this.list[n].loOiHandle);
			this.list[n].loType = pOI.oiType;
		}
		this.handleToIndex = new Array(maxHandles);
		for (n = 0; n < this.nIndex; n++)
		{
			this.handleToIndex[this.list[n].loHandle] = n;
		}
	},
	getLOFromIndex:  function (index)
	{
		return this.list[index];
	},
	getLOFromHandle: function (handle)
	{
		if (handle < this.handleToIndex.length)
		{
			return this.list[this.handleToIndex[handle]];
		}
		return null;
	},

	next_LevObj: function ()
	{
		var plo;
		if (this.loFranIndex < this.nIndex)
		{
			do
			{
				plo = this.list[this.loFranIndex++];
				if (plo.loType >= 2)		// OBJ_SPR
				{
					return plo;
				}
			} while (this.loFranIndex < this.nIndex);
		}
		return null;
	},

	first_LevObj: function ()
	{
		this.loFranIndex = 0;
		return this.next_LevObj();
	}
}

// CLayer object
// --------------------------------------------------------------------------
CLayer.FLOPT_XCOEF = 0x0001;
CLayer.FLOPT_YCOEF = 0x0002;
CLayer.FLOPT_NOSAVEBKD = 0x0004;
CLayer.FLOPT_VISIBLE = 0x0010;
CLayer.FLOPT_WRAP_HORZ = 0x0020;
CLayer.FLOPT_WRAP_VERT = 0x0040;
CLayer.FLOPT_REDRAW = 0x000010000;
CLayer.FLOPT_TOHIDE = 0x000020000;
CLayer.FLOPT_TOSHOW = 0x000040000;
function CLayer(a)
{
	this.app = a;
	this.pName = null;
	this.x = 0;
	this.y = 0;
	this.realX = 0;
	this.realY = 0;
	this.dx = 0;
	this.dy = 0;
	this.pObstacles = null;
	this.pPlatforms = null;
	this.addedBackdrops = null;
	this.bVisible = false;
	this.pLadders = null;
	this.nZOrderMax = 0;
	this.dwOptions = 0;
	this.xCoef = 0;
	this.yCoef = 0;
	this.nBkdLOs = 0;
	this.nFirstLOIndex = 0;
	this.effect = 0;
	this.effectParam = 0;
	this.backUp_dwOptions = 0;
	this.backUp_xCoef = 0;
	this.backUp_yCoef = 0;
	this.backUp_nBkdLOs = 0;
	this.backUp_nFirstLOIndex = 0;
	this.planeBack = null;
	this.planeQuickDisplay = null;
	this.planeSprites = null;
	this.angle = 0;
	this.scale = this.scaleX = this.scaleY = 1;
	this.xSpot = this.xDest = 320;
	this.ySpot = this.yDest = 240;
}
CLayer.prototype =
{
	load:                 function (file)
	{
		this.dwOptions = file.readAInt();
		this.xCoef = file.readAFloat();
		this.yCoef = file.readAFloat();
		this.nBkdLOs = file.readAInt();
		this.nFirstLOIndex = file.readAInt();
		this.pName = file.readAString();

		this.backUp_dwOptions = this.dwOptions;
		this.backUp_xCoef = this.xCoef;
		this.backUp_yCoef = this.yCoef;
		this.backUp_nBkdLOs = this.nBkdLOs;
		this.backUp_nFirstLOIndex = this.nFirstLOIndex;
	},
	reset:                function ()
	{
		this.dwOptions = this.backUp_dwOptions;
		this.xCoef = this.backUp_xCoef;
		this.yCoef = this.backUp_yCoef;
		this.nBkdLOs = this.backUp_nBkdLOs;
		this.nFirstLOIndex = this.backUp_nFirstLOIndex;
		this.x = this.y = this.dx = this.dy = this.realX = this.realY = 0;

		this.pObstacles = null;
		this.pPlatforms = null;
		this.pLadders = null;
		this.addedBackdrops = null;

		this.setAngle(0);
		this.scale = 1;
		this.setScaleX(1);
		this.setScaleY(1);
		this.setXSpot(this.app.gaCxWin / 2);
		this.setYSpot(this.app.gaCyWin / 2);
		this.setXDest(this.app.gaCxWin / 2);
		this.setYDest(this.app.gaCyWin / 2);
		this.setZoom(false);

		if (this.dwOptions & CLayer.FLOPT_TOHIDE)
		{
			this.bVisible = true;
			this.hide();
		}
		else
		{
			this.bVisible = false;
			this.show();
		}
	},
	deleteBackObjects:    function ()
	{
		this.planeBack.removeAll();
	},
	addObstacle:          function (bi)
	{
		if (this.pObstacles == null)
			this.pObstacles = new CArrayList();
		this.pObstacles.add(bi);
	},
	delObstacle:          function (bi)
	{
		if (this.pObstacles != null)
			this.pObstacles.removeObject(bi);
	},
	addPlatform:          function (bi)
	{
		if (this.pPlatforms == null)
			this.pPlatforms = new CArrayList();
		this.pPlatforms.add(bi);
	},
	delPlatform:          function (bi)
	{
		if (this.pPlatforms != null)
			this.pPlatforms.removeObject(bi);
	},
	addBackdrop:          function (bi)
	{
		if (this.addedBackdrops == null)
			this.addedBackdrops = new CArrayList();
		this.addedBackdrops.add(bi);
	},
	resetLevelBackground: function ()
	{
		this.pPlatforms = null;
		this.pObstacles = null;
		this.pLadders = null;
		this.addedBackdrops = null;
		this.planeBack.removeAll();
	},
	createPlanes:         function (xOffset, yOffset)
	{
		this.planeBack = new Sprite();
		this.planeBack.x = xOffset;
		this.planeBack.y = yOffset;
		this.planeQuickDisplay = new Sprite();
		this.planeQuickDisplay.x = xOffset;
		this.planeQuickDisplay.y = yOffset;
		this.planeSprites = new Sprite();
		this.planeSprites.x = xOffset;
		this.planeSprites.y = yOffset;

		this.setAngle(0);
		this.scale = 1;
		this.setScaleX(1);
		this.setScaleY(1);
		this.setXSpot(this.app.gaCxWin / 2);
		this.setYSpot(this.app.gaCyWin / 2);
		this.setXDest(this.app.gaCxWin / 2);
		this.setYDest(this.app.gaCyWin / 2);
		this.setZoom(false);

		this.app.mainSprite.addChild(this.planeBack);
		this.app.mainSprite.addChild(this.planeQuickDisplay);
		this.app.mainSprite.addChild(this.planeSprites);
		this.showHide();
	},

	setAngle:  function (angle)
	{
		this.angle = angle;
		this.planeBack.angle = angle;
		this.planeQuickDisplay.angle = angle;
		this.planeSprites.angle = angle;
	},
	setScaleX: function (scale)
	{
		this.scaleX = scale;
		this.planeBack.scaleX = scale;
		this.planeQuickDisplay.scaleX = scale;
		this.planeSprites.scaleX = scale;
	},
	setScaleY: function (scale)
	{
		this.scaleY = scale;
		this.planeBack.scaleY = scale;
		this.planeQuickDisplay.scaleY = scale;
		this.planeSprites.scaleY = scale;
	},
	setXSpot:  function (spot)
	{
		this.xSpot = spot;
		this.planeBack.xSpot = spot;
		this.planeQuickDisplay.xSpot = spot;
		this.planeSprites.xSpot = spot;
	},
	setYSpot:  function (spot)
	{
		this.ySpot = spot;
		this.planeBack.ySpot = spot;
		this.planeQuickDisplay.ySpot = spot;
		this.planeSprites.ySpot = spot;
	},
	setXDest:  function (spot)
	{
		spot = this.app.gaCxWin - spot;
		this.xDest = spot;
		this.planeBack.xDest = spot;
		this.planeQuickDisplay.xDest = spot;
		this.planeSprites.xDest = spot;
	},
	setYDest:  function (spot)
	{
		spot = this.app.gaCyWin - spot;
		this.yDest = spot;
		this.planeBack.yDest = spot;
		this.planeQuickDisplay.yDest = spot;
		this.planeSprites.yDest = spot;
	},
	setZoom:   function (zoom)
	{
		this.bZoom = zoom;
		this.planeBack.bZoom = zoom;
		this.planeQuickDisplay.bZoom = zoom;
		this.planeSprites.bZoom = zoom;
	},

	resetPlanes: function (xOffset, yOffset)
	{
		this.planeBack.x = xOffset;
		this.planeBack.y = yOffset;
		this.planeQuickDisplay.x = xOffset;
		this.planeQuickDisplay.y = yOffset;
		this.planeSprites.x = xOffset;
		this.planeSprites.y = yOffset;
		this.show();
	},

	fillBack: function (sx, sy, color)
	{
		// TODO!
	},

	showHide:               function ()
	{
		if (this.dwOptions & CLayer.FLOPT_VISIBLE)
			this.show();
		else
			this.hide();
	},
	hide:                   function ()
	{
		this.dwOptions &= ~CLayer.FLOPT_TOHIDE;
		if (this.bVisible)
		{
			this.planeBack.visible = false;
			this.planeQuickDisplay.visible = false;
			this.planeSprites.visible = false;
			this.bVisible = false;
		}
	},
	show:                   function ()
	{
		if (this.bVisible == false)
		{
			this.planeBack.visible = true;
			this.planeQuickDisplay.visible = true;
			this.planeSprites.visible = true;
			this.bVisible = true;
		}
	},
	deletePlanes:           function ()
	{
		if (this.planeBack != null)
		{
			this.app.mainSprite.removeChild(this.planeBack);
			this.planeBack = null;
		}
		if (this.planeQuickDisplay != null)
		{
			this.app.mainSprite.removeChild(this.planeQuickDisplay);
			this.planeQuickDisplay = null;
		}
		if (this.planeSprites != null)
		{
			this.app.mainSprite.removeChild(this.planeSprites);
			this.planeSprites = null;
		}
	},
	deleteAddedBackdrops:   function ()
	{
		var n;
		if (this.addedBackdrops != null)
		{
			for (n = 0; n < this.addedBackdrops.size(); n++)
			{
				var bi = this.addedBackdrops.get(n);
				bi.delInstance(this);
				if (bi.body != null)
				{
					this.app.run.rh4Box2DBase.rSubABackdrop(bi.body);
				}
			}
		}
		this.addedBackdrops = null;
	},
	deleteAddedBackdropsAt: function (xx, yy, fine)
	{
		xx += this.x;
		yy += this.y;

		var n;
		if (this.addedBackdrops != null)
		{
			for (n = 0; n < this.addedBackdrops.size(); n++)
			{
				var bi = this.addedBackdrops.get(n);
				if (xx >= bi.x && xx < bi.x + bi.width)
				{
					if (yy >= bi.y && yy < bi.y + bi.height)
					{
						var flag = true;
						if (fine)
						{
							flag = bi.testPoint(xx, yy);
						}
						if (flag)
						{
							bi.delInstance(this);
							this.addedBackdrops.removeObject(bi);
							if (bi.body != null)
							{
								this.app.run.rh4Box2DBase.rSubABackdrop(bi.body);
							}
							return;
						}
					}
				}
			}
		}
	},

	addLadder: function (x1, y1, x2, y2)
	{
		var rc = new CRect();
		rc.left = x1;
		rc.top = y1;
		rc.right = x2;
		rc.bottom = y2;
		if (this.pLadders == null)
			this.pLadders = new CArrayList();
		this.pLadders.add(rc);
	},

	ladderSub:   function (x1, y1, x2, y2)
	{
		if (pLadders != null)
		{
			var rc = new CRect();
			rc.left = Math.min(x1, x2);
			rc.top = Math.min(y1, y2);
			rc.right = Math.max(x1, x2);
			rc.bottom = Math.max(y1, y2);

			var i;
			var rcDst;
			for (i = 0; i < pLadders.size(); i++)
			{
				rcDst = this.pLadders.get(i);
				if (rcDst.intersectRect(rc) == true)
				{
					this.pLadders.removeIndex(i);
					i--;
				}
			}
		}
	},
	getLadderAt: function (xx, yy)
	{
		var nl, nLayers;
		xx += this.x;
		yy += this.y;

		if (this.pLadders != null)
		{
			var i;
			var rc;
			for (i = 0; i < this.pLadders.size(); i++)
			{
				rc = this.pLadders.get(i);
				if (xx >= rc.left)
				{
					if (yy >= rc.top)
					{
						if (xx < rc.right)
						{
							if (yy < rc.bottom)
							{
								return rc;
							}
						}
					}
				}
			}
		}
		return null;
	},
	testMask:    function (mask, xx, yy, htFoot, plan)
	{
		var xLeft = xx + this.x - mask.xSpot;
		var yTop = yy + this.y - mask.ySpot;
		var xRight = xLeft + mask.width;
		var yBottom = yTop + mask.height;
		var yFoot = yTop;
		if (htFoot != 0)
			yFoot = yBottom - htFoot;

		var o;
		var bi;
		var list;
		if (plan == CColMask.CM_TEST_OBSTACLE)
			list = this.pObstacles;
		else
			list = this.pPlatforms;
		if (list == null)
			return null;

		for (o = 0; o < list.size(); o++)
		{
			bi = list.get(o);
			if (bi.x < xRight && bi.x + bi.width > xLeft)
			{
				if (bi.y < yBottom && bi.y + bi.height > yFoot)
				{
					if (bi.testMask(mask, xLeft, yTop, htFoot))
					{
						return bi;
					}
				}
			}
		}
		return null;
	},
	testRect:    function (x1, y1, x2, y2, htFoot, plan)
	{
		var list;
		if (plan == CColMask.CM_TEST_OBSTACLE)
			list = this.pObstacles;
		else
			list = this.pPlatforms;
		if (list == null)
			return null;

		x1 += this.x;
		y1 += this.y;
		x2 += this.x;
		y2 += this.y;
		if (htFoot != 0)
			y1 = y2 - htFoot;

		var o;
		for (o = 0; o < list.size(); o++)
		{
			var bi = list.get(o);
			if (bi.x < x2 && bi.x + bi.width > x1)
			{
				if (bi.y < y2 && bi.y + bi.height > y1)
				{
					if (bi.testRect(x1, y1, x2, y2))
					{
						return bi;
					}
				}
			}
		}
		return null;
	},
	testPoint:   function (x1, y1, plan)
	{
		var list;
		if (plan == CColMask.CM_TEST_OBSTACLE)
			list = this.pObstacles;
		else
			list = this.pPlatforms;
		if (list == null)
			return null;

		x1 += this.x;
		y1 += this.y;

		var o;
		for (o = 0; o < list.size(); o++)
		{
			var bi = list.get(o);
			if (x1 >= bi.x && x1 < bi.x + bi.width)
			{
				if (y1 >= bi.y && y1 < bi.y + bi.height)
				{
					if (bi.testPoint(x1, y1))
					{
						return bi;
					}
				}
			}
		}
		return null;
	}
}

// CBackInstance object
// ------------------------------------------------------------------
function CBackInstance(a, xx, yy, plo, sprImage, colType)
{
	this.app = a;
	this.levelObject = plo;
	this.type = 0;
	this.obstacleType = 0;
	this.x = xx;
	this.y = yy;
	this.width = 0;
	this.height = 0;
	this.poi = null;
	this.colBox = false;
	this.imageUsed = null;
	this.borderWidth = 0;
	this.color1 = null;
	this.color2 = null;
	this.borderColor = null;
	this.effect = 0;
	this.effectParam = 0;
	this.body = null;
	this.ho = null;

	if (plo)
	{
		this.poi = this.app.OIList.getOIFromHandle(plo.loOiHandle);
		this.type = this.poi.oiType;
		this.obstacleType = this.poi.oiOC.ocObstacleType;
		this.borderWidth = this.poi.oiOC.ocBorderSize;
		this.gradientFlags = this.poi.oiOC.ocGradientFlags;
		this.effect = this.poi.oiInkEffect;
		this.effectParam = this.poi.oiInkEffectParam;
		this.width = this.poi.oiOC.ocCx;
		this.height = this.poi.oiOC.ocCy;
		this.colBox = this.poi.oiOC.ocColMode != 0;
		this.color1 = this.poi.oiOC.ocColor1;
		this.color2 = this.poi.oiOC.ocColor2;
		this.borderColor = this.poi.oiOC.ocBorderColor;
		if (this.type == 1)
		{
			this.imageUsed = this.app.imageBank.getImageFromHandle(this.poi.oiOC.ocImage);
			this.width = this.imageUsed.width;
			this.height = this.imageUsed.height;
		}
		else if (this.type >= 32)
		{
			var rhPtr = this.app.run;
			var hoPtr = null;
			var count = 0;
			for (var nObject = 0; nObject < rhPtr.rhNObjects; nObject++)
			{
				while (rhPtr.rhObjectList[count] == null)
					count++;
				hoPtr = rhPtr.rhObjectList[count];
				count++;
				if (hoPtr.lo == plo)
				{
					break;
				}
			}
			this.ho = hoPtr;
		}
	}
	else
	{
		this.type = COI.OBJ_PASTED;
		this.imageUsed = sprImage;
		this.width = this.imageUsed.width;
		this.height = this.imageUsed.height;
		this.x -= this.imageUsed.xSpot;
		this.y -= this.imageUsed.ySpot;
		switch (colType)
		{
			case 0:
				this.obstacleType = COC.OBSTACLE_NONE;
				break;
			case 1:
				this.obstacleType = COC.OBSTACLE_SOLID;
				break;
			case 2:
				this.obstacleType = COC.OBSTACLE_PLATFORM;
				break;
			case 3:
				this.obstacleType = COC.OBSTACLE_LADDER;
				break;
		}
		this.colBox = false;
	}
}
CBackInstance.prototype =
{
	draw:        function (context, xx, yy)
	{
		if (this.levelObject != null)
		{
			if (this.type == COI.OBJ_BOX)
			{
				var pCOCQB = this.poi.oiOC;
				var image;

				switch (pCOCQB.ocFillType)
				{
					case 0: /* no fill */
						break;

					case 1: /* solid */

						switch (pCOCQB.ocShape)
						{
							case 1: /* line */

								context.renderLine(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.effect,
									this.effectParam);

								break;

							case 2: /* rectangle */

								context.renderSolidColor(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.effect,
									this.effectParam);

								break;

							case 3: /* ellipse */
								context.renderSolidColorEllipse(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.effect,
									this.effectParam);
								break;
						}
						;

						break;

					case 2: /* gradient */

						switch (pCOCQB.ocShape)
						{
							case 1: /* line */

								context.renderLine(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.effect,
									this.effectParam);

								break;

							case 2: /* rectangle */

								context.renderGradient(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.color2, this.gradientFlags != 0,
									this.effect, this.effectParam);

								break;

							case 3: /* ellipse */

								context.renderGradientEllipse(xx + this.x, yy + this.y, this.width,
									this.height, this.color1, this.color2, this.gradientFlags != 0,
									this.effect, this.effectParam);

								break;
						}
						;

						break;

					case 3: /* motif */

						switch (pCOCQB.ocShape)
						{
							case 1: /* line */
								break;

							case 2: /* rectangle */
								image = this.app.imageBank.getImageFromHandle(pCOCQB.ocImage);
								context.renderPattern(image, xx + this.x, yy + this.y, this.width,
									this.height, this.effect, this.effectParam);
								break;

							case 3: /* ellipse */
								image = this.app.imageBank.getImageFromHandle(pCOCQB.ocImage);
								context.renderPatternEllipse(image, xx + this.x, yy + this.y, this.width,
									this.height, this.effect, this.effectParam);
								break;
						}
						break;
				}

				if (this.borderWidth > 0)
				{
					switch (pCOCQB.ocShape)
					{
						case 1: /* line */

							var xLine = 0;
							var yLine = 0;
							var cxLine = this.width;
							var cyLine = this.height;
							if ((pCOCQB.ocLineFlags & COCQBackdrop.LINEF_INVX) != 0)
							{
								xLine += cxLine;
								cxLine = -cxLine;
							}
							if ((pCOCQB.ocLineFlags & COCQBackdrop.LINEF_INVY) != 0)
							{
								yLine += cyLine;
								cyLine = -cyLine;
							}

							context.renderLine(xx + this.x + xLine, yy + this.y + yLine,
								xx + this.x + xLine + cxLine, yy + this.y + yLine + cyLine,
								this.borderColor, this.borderWidth);

							break;

						case 2: /* rectangle */

							context.renderRect(xx + this.x, yy + this.y, this.width, this.height,
								this.borderColor, this.borderWidth);

							break;

						case 3: /* ellipse */

							context.renderEllipse(xx + this.x, yy + this.y, this.width,
								this.height, 1, this.borderColor, this.borderWidth);
							break;
					}
				}
			}
			else if (this.type == COI.OBJ_BKD)
			{
			    context.renderImage(this.imageUsed, xx + this.x + this.imageUsed.xSpot, yy + this.y + this.imageUsed.ySpot, 0, 1.0, 1.0, this.effect, this.effectParam);
			}
			else
			{
			    if ( this.ho != null )
				    this.ho.draw(context, xx, yy);
			}
		}
		else
		{
		    context.renderImage(this.imageUsed, xx + this.x + this.imageUsed.xSpot, yy + this.y + this.imageUsed.ySpot, 0, 1.0, 1.0, this.effect, this.effectParam);
		}
	},
	setEffect:   function (e, ep)
	{
		this.effect = e;
		this.effectParam = ep;
	},
	addInstance: function (num, pLayer)
	{
		pLayer.planeBack.addChild(this);
		if (this.type == COI.OBJ_PASTED)
			pLayer.addBackdrop(this);

		switch (this.obstacleType)
		{
			case COC.OBSTACLE_SOLID:
				pLayer.addObstacle(this);
				pLayer.addPlatform(this);
				break;
			case COC.OBSTACLE_PLATFORM:
				pLayer.addPlatform(this);
				break;
			case COC.OBSTACLE_LADDER:
				pLayer.addLadder(this.x, this.y, this.x + this.width, this.y + this.height);
				break;
		}
	},
	delInstance: function (pLayer)
	{
		pLayer.planeBack.removeChild(this);
		switch (this.obstacleType)
		{
			case COC.OBSTACLE_SOLID:
				pLayer.delObstacle(this);
				pLayer.delPlatform(this);
				break;
			case COC.OBSTACLE_PLATFORM:
				pLayer.delPlatform(this);
				break;
			case COC.OBSTACLE_LADDER:
				pLayer.ladderSub(x, y, x + width, y + height);
				break;
		}
	},

	testMask:  function (mask, xx, yy, htFoot)
	{
		var flags;
		var mask2;

		switch (this.type)
		{
			case 0:
				var h = this.height;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					h = CRunFrame.HEIGHT_PLATFORM;
				}
				return mask.testRect2(xx, yy, htFoot, this.x, this.y, this.width, h, 0);
			case 1:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask2 = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testMask(xx, yy, htFoot, mask2, this.x, this.y, 0);
			case 11:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask2 = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testMask(xx, yy, htFoot, mask2, this.x, this.y, 0);
		}
		return false;
	},
	testRect:  function (x1, y1, x2, y2)
	{
		var flags;
		var mask;

		switch (this.type)
		{
			case 0:
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					var yTop = this.y;
					var yBottom = this.y + Math.min(this.height, CRunFrame.HEIGHT_PLATFORM);
					if (yTop < y2 && yBottom > y1)
					{
						return true;
					}
					return false;
				}
				return true;
			case 1:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testRect2(this.x, this.y, 0, x1, y1, x2, y2, 0);
			case 11:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testRect2(this.x, this.y, 0, x1, y1, x2, y2, 0);
		}
		return false;
	},
	testPoint: function (x1, y1)
	{
		var flags;
		var mask;

		switch (this.type)
		{
			case 0:
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					var yTop = y + this.height - CRunFrame.HEIGHT_PLATFORM;
					var yBottom = this.y + this.height;
					if (y1 >= yTop && y1 < yBottom)
					{
						return true;
					}
					return false;
				}
				return true;
			case 1:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testPoint(this.x, this.y, x1, y1);
			case 11:
				if (this.colBox != 0)
				{
					return true;
				}
				flags = CMask.GCMF_OBSTACLE;
				if (this.obstacleType == COC.OBSTACLE_PLATFORM)
				{
					flags = CMask.GCMF_PLATFORM;
				}
				mask = this.imageUsed.getMask(flags, 0, 1.0, 1.0);
				return mask.testPoint(this.x, this.y, x1, y1);
		}
		return false;
	}
}


