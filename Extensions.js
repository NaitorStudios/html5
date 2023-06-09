// CEXTLOADER extension loading
//----------------------------------------------------------------------------------
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
CExtLoader.KPX_BASE = 32;
function CExtLoader(a)
{
	this.app = a;
	this.extensions = null;
	this.numOfConditions = 0;
}

CExtLoader.prototype =
{

    createList: function (file) {

        var extMaxHandle = 0;
        if (extMaxHandle) {
            this.extensions = new Array(extMaxHandle);
            this.numOfConditions = new Array(extMaxHandle);
            var n;
            for (n = 0; n < extMaxHandle; n++) {
                this.extensions[n] = null;
                this.numOfConditions[n] = 0;
            }

            var e;
            // START_ADDEXT
            // INCLUDE_ADDEXT
        }
    },

	addExt: function (e)
	{
	    var ext = e.loadRunObject();
	    if (ext != null) {
	        this.extensions[e.handle] = e;
	        this.numOfConditions[e.handle] = ext.getNumberOfConditions();
	    }
    },
	    
	loadRunObject: function (type)
	{
		type -= CExtLoader.KPX_BASE;
		var ext = null;
		if (type < this.extensions.length && this.extensions[type] != null)
		{
			ext = this.extensions[type].loadRunObject();
		}
		return ext;
	},

	getNumberOfConditions: function (type)
	{
		type -= CExtLoader.KPX_BASE;
		if (type < this.extensions.length)
		{
			return this.numOfConditions[type];
		}
		return 0;
	}
}

//----------------------------------------------------------------------------------
//
// CEXTLOADER: Chargement des extensions
//
//----------------------------------------------------------------------------------
function CExtLoad()
{
	this.handle = 0;
}

CExtLoad.prototype =
{

    loadRunObject: function ()
	{
        switch (this.handle) {
            // START_NEWEXT
            // INCLUDE_NEWEXT
        }


		return null;
        /*
		 if (document.debug==undefined)
		 {
		 var type = CExtLoad.types[this.name];
		 if (type)
		 return new type;
		 }
		 else
		 return new window['CRun' + this.name];
		 */
    }
}

// CRUNEXTENSION Object
//----------------------------------------------------------------------------------
CRunExtension.REFLAG_DISPLAY = 1;
CRunExtension.REFLAG_ONESHOT = 2;
function CRunExtension()
{
	this.ho = null;
	this.rh = null;
}
CRunExtension.prototype =
{
	init: function (hoPtr)
	{
		this.ho = hoPtr;
		this.rh = hoPtr.hoAdRunHeader;
	},

	getNumberOfConditions: function ()
	{
		return 0;
	},

	createRunObject: function (file, cob, version)
	{
		return false;
	},

	handleRunObject: function ()
	{
		return CRunExtension.REFLAG_ONESHOT;
	},

	displayRunObject: function (context, xDraw, yDraw)
	{
	},

	destroyRunObject: function (bFast)
	{
	},
	createFont:       function ()
	{
	},
	pauseRunObject:   function ()
	{
	},

	continueRunObject: function ()
	{
	},

	getZoneInfos: function ()
	{
	},

	condition: function (num, cnd)
	{
		return false;
	},

	action: function (num, act)
	{
	},

	expression: function (num)
	{
		return null;
	},

	getRunObjectCollisionMask: function (flags)
	{
		return null;
	},

	getRunObjectFont: function ()
	{
		return null;
	},

	setRunObjectFont: function (fi, rc)
	{
	},

	getRunObjectTextColor: function ()
	{
		return 0;
	},

	setRunObjectTextColor: function (rgb)
	{
	},

	autoResize: function ()
	{
	},

	forcePosition: function ()
	{
	}
}

// CEXPEXTENSION : expressions extension
// -----------------------------------------------------------------------------
function CExpExtension()
{
}
CExpExtension.prototype =
{
	evaluate: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ExpressionObjects(this.oiList);
		if (pHo == null)
		{
			rhPtr.rh4Results[rhPtr.rh4PosPile] = 0;
			return;
		}
		var exp = (this.code >> 16) - CEventProgram.EVENTS_EXTBASE;				// Vire le type
		rhPtr.currentPtr = this;
		rhPtr.rh4Results[rhPtr.rh4PosPile] = pHo.expression(exp);
	}
}

// CACTEXTENSION : actions extension
// -----------------------------------------------------------------------------

function CActExtension()
{
}
CActExtension.prototype =
{
	execute: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.get_ActionObjects(this);
		if (pHo == null)
			return;

		var act = (this.evtCode >>> 16) - CEventProgram.EVENTS_EXTBASE;
		rhPtr.currentPtr = this;
		pHo.action(act, this);
	},

	getParamObject: function (rhPtr, num)
	{
		return rhPtr.rhEvtProg.get_ParamActionObjects(this.evtParams[num].oiList, this);
	},

	getParamBorder: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamShort: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamAltValue: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamDirection: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamEffect: function (rhPtr, num)
	{
		return this.evtParams[num].string;
	},

	getParamCreate: function (rhPtr, num)
	{
		return this.evtParams[num];
	},

	getParamAnimation: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 10)
		{
			return this.evtParams[num].value;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamPlayer: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamEvery: function (rhPtr, num)
	{
		return this.evtParams[num].delay;
	},

	getParamKey: function (rhPtr, num)
	{
		return this.evtParams[num].key;
	},

	getParamSpeed: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamPosition: function (rhPtr, num)
	{
		var position = this.evtParams[num];
		var pInfo = new CPositionInfo();
		if (position.read_Position(rhPtr, 0, pInfo))
		    pInfo.found = true;
		return pInfo;
	},

	getParamJoyDirection: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamShoot: function (rhPtr, num)
	{
		return this.evtParams[num];
	},

	getParamZone: function (rhPtr, num)
	{
		return this.evtParams[num];
	},

	getParamExpression: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamColour: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 24)
		{
			return this.evtParams[num].color;
		}
		return CServices.swapRGB(rhPtr.get_EventExpressionInt(this.evtParams[num]));
	},

	getParamFrame: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamNewDirection: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 29)
		{
			return this.evtParams[num].value;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamClick: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamExpString: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionString(this.evtParams[num]);
	},

	getParamFilename: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 40)
		{
			return this.evtParams[num].string;
		}
		return rhPtr.get_EventExpressionString(this.evtParams[num]);
	},

	getParamExpDouble: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionAny(this.evtParams[num]);
	},

	getParamFilename2: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 63)
		{
			return this.evtParams[num].string;
		}
		return rhPtr.get_EventExpressionString(this.evtParams[num]);
	},

	getParamExtension: function (rhPtr, num)
	{
		var p = this.evtParams[num];
		if (p.data != 0)
		{
			return rhPtr.rhApp.file.createFromFile(p.data);
		}
		return null;
	},

	getParamTime: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 2)
		{
			return this.evtParams[num].timer;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	}
}

// EXTENSION conditions
// ------------------------------------------------------------------------------
function CCndExtension()
{
}
CCndExtension.prototype =
{
	eva1: function (rhPtr, pHo)
	{
		if (pHo == null)
			return this.eva2(rhPtr);

		pHo.hoFlags |= CObject.HOF_TRUEEVENT;
		var cond = -(this.evtCode >> 16) - CEventProgram.EVENTS_EXTBASE - 1;
		rhPtr.currentPtr = this;
		if (pHo.condition(cond, this))
		{
			rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
			return true;
		}
		return false;
	},

	eva2: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		var cond = -(this.evtCode >> 16) - CEventProgram.EVENTS_EXTBASE - 1;

		rhPtr.currentPtr = this;
		while (pHo != null)
		{
			pHo.hoFlags &= ~CObject.HOF_TRUEEVENT;
			if (pHo.condition(cond, this))
			{
				if ((this.evtFlags2 & CEvent.EVFLAG2_NOT) != 0)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
			}
			else
			{
				if ((this.evtFlags2 & CEvent.EVFLAG2_NOT) == 0)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		}
		if (cpt != 0)
			return true;
		return false;
	},

	getParamObject: function (rhPtr, num)
	{
		return this.evtParams[num];
	},

	getParamTime: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 2)
		{
			return this.evtParams[num].timer;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamBorder: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamAltValue: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamDirection: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamAnimation: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 10)
		{
			return this.evtParams[num].value;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamPlayer: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamEvery: function (rhPtr, num)
	{
		return this.evtParams[num].delay;
	},

	getParamKey: function (rhPtr, num)
	{
		return this.evtParams[num].key;
	},

	getParamSpeed: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamPosition: function (rhPtr, num)
	{
		//return this.evtParams[num];
	    var position = this.evtParams[num];
	    var pInfo = new CPositionInfo();
	    if (position.read_Position(rhPtr, 0, pInfo))
	        pInfo.found = true;
	    return pInfo;
	},

	getParamJoyDirection: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamExpression: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamColour: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 24)
		{
			return this.evtParams[num].color;
		}
		return CServices.swapRGB(rhPtr.get_EventExpressionInt(this.evtParams[num]));
	},

	getParamFrame: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamNewDirection: function (rhPtr, num)
	{
		if (this.evtParams[num].code == 29)
		{
			return this.evtParams[num].value;
		}
		return rhPtr.get_EventExpressionInt(this.evtParams[num]);
	},

	getParamClick: function (rhPtr, num)
	{
		return this.evtParams[num].value;
	},

	getParamExpString: function (rhPtr, num)
	{
		return rhPtr.get_EventExpressionString(this.evtParams[num]);
	},

	compareValues: function (rhPtr, num, value)
	{
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[num]);
		var comp = this.evtParams[num].comparaison;
		return CRun.compareTo(value, value2, comp);
	},

	compareTime: function (rhPtr, num, t)
	{
		var p = this.evtParams[num];
		return CRun.compareTo(t, p.timer, p.comparaison);
	}
}

/* Base for control extensions (James) */

function CRunControl()
{
	this.element = null;
	this.controlIgnoreHeight = false;
	this.bnShownOld = false;
};

CRunControl.prototype = CServices.extend(new CRunExtension(),
	{
		forcePosition: function ()
		{
			this.setPosition(this.ho.hoX, this.ho.hoY);
		},
		autoResize:    function ()
		{
			this.setPosition(this.ho.hoX, this.ho.hoY);
			this.setSize(this.ho.hoImgWidth, this.ho.hoImgHeight);
		},
		setElement:    function (e, visible)
		{
			this.element = e;

			e.style.position = 'absolute';

			this.setSize(this.ho.hoImgWidth, this.ho.hoImgHeight);
			this.setPosition(this.ho.hoX, this.ho.hoY);

			if (this.fontInfo)
				this.setFont(this.fontInfo);

			this.ho.bShown = visible;
			this.bShownOld = visible;
			if (this.rh.rhApp.loading)
			{
				e.style.visibility = 'hidden';
				this.bShownOld = false;
			}
			else
			{
				if (visible)
					e.style.visibility = 'visible';
				else
					e.style.visibility = 'hidden';
			}

			var container = this.rh.rhApp.container;

			container.appendChild(e);
		},
		getXOffset:    function ()
		{
		    if (this.rh.rhApp.canvas)
		        return this.rh.rhApp.canvas.offsetLeft;
		    return 0;
		},
		getYOffset:    function ()
		{
		    if (this.rh.rhApp.canvas)
		        return this.rh.rhApp.canvas.offsetTop;
		    return 0;
		},

		setX: function (x)
		{
			this.ctrlLastX = x;

			this.ho.setX(x);

			if (this.element)
				this.element.style.left = this.getXOffset() + this.rh.rhApp.xMouseOffset + (this.ho.hoX - this.ho.hoAdRunHeader.rhWindowX) * this.rh.rhApp.scaleX + 'px';
		},

		setY: function (y)
		{
			this.ctrlLastY = y;

			this.ho.setY(y);

			if (this.element)
			    this.element.style.top = this.getYOffset() + this.rh.rhApp.yMouseOffset + (this.ho.hoY - this.ho.hoAdRunHeader.rhWindowY) * this.rh.rhApp.scaleY + 'px';
		},

		setPosition: function (x, y)
		{
			this.ctrlLastX = x;
			this.ctrlLastY = y;

			this.ho.setPosition(x, y);

			if (this.element)
			{
			    this.element.style.left = this.getXOffset() + this.rh.rhApp.xMouseOffset + (this.ho.hoX - this.ho.hoAdRunHeader.rhWindowX) * this.rh.rhApp.scaleX + 'px';
			    this.element.style.top = this.getYOffset() + this.rh.rhApp.yMouseOffset + (this.ho.hoY - this.ho.hoAdRunHeader.rhWindowY) * this.rh.rhApp.scaleY + 'px';
			}
		},

		setWidth: function (width)
		{
			this.ctrlLastWidth = width;

			this.ho.setWidth(width);

			if (this.element)
				this.element.style.width = this.ho.hoImgWidth * this.rh.rhApp.scaleX + 'px';
		},

		setHeight: function (height)
		{
			this.ctrlLastHeight = height;

			this.ho.setHeight(height);

			if (this.element && !this.controlIgnoreHeight)
				this.element.style.height = this.ho.hoImgHeight * this.rh.rhApp.scaleY + 'px';
		},

		setSize: function (width, height)
		{
			this.ctrlLastWidth = width;
			this.ctrlLastHeight = height;

			this.ho.setSize(width, height);

			if (this.element)
			{
				this.element.style.width = this.ho.hoImgWidth * this.rh.rhApp.scaleX + 'px';
				if (!this.controlIgnoreHeight)
					this.element.style.height = this.ho.hoImgHeight * this.rh.rhApp.scaleY + 'px';
			}
		},

		setFont: function (fontInfo)
		{
			this.fontInfo = fontInfo;

			if (this.element)
				this.element.style.font = fontInfo.getFont();
		},

		destroyRunObject: function ()
		{
			if (this.element)
			{
				this.rh.rhApp.container.removeChild(this.element);
			}
		},

		getRunObjectFont: function ()
		{
			return this.fontInfo;
		},

		setRunObjectFont: function (fontInfo, rc)
		{
			this.setFont(fontInfo);
		},

		handleRunObject: function ()
		{
			if (!this.rh.rhApp.loading)
			{
				if (this.ho.bShown != this.bShownOld)
				{
				    this.bShownOld = this.ho.bShown;
				    if (this.element) {
				        if (this.ho.bShown)
				            this.element.style.visibility = 'visible';
				        else
				            this.element.style.visibility = 'hidden';
				    }
				}
			}
			if (this.ho.hoX != this.ctrlLastX ||
				this.ho.hoY != this.ctrlLastY)
			{
				this.setPosition(this.ho.hoX, this.ho.hoY);
			}

			if (this.ho.hoImgWidth != this.ctrlLastWidth ||
				this.ho.hoImgHeight != this.ctrlLastHeight)
			{
				this.setSize(this.ho.hoImgWidth, this.ho.hoImgHeight);
			}

			return 0;
		}
	});

