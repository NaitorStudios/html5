// CCnd object
// ----------------------------------------------------------
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
CCnd.NUM_ONEVENT = 6;
CCnd.CND_ONLOOP = ((-16 << 16) | 0xFFFF);
CCnd.CND_OR = ((-24 << 16) | 65535);
CCnd.CND_ORLOGICAL = ((-25 << 16) | 65535);
function CCnd()
{
}
CCnd.create = function (app)
{
	var debut = app.file.getFilePointer();

	var size = app.file.readAShort();
	var cnd = null;
	var c = app.file.readAInt();
	switch (c)
	{
	    case ((-43 << 16) | 0xFFFF):
	        cnd = new CND_STARTCHILDEVENT();
	        break;
	    case ((-42 << 16) | 0xFFFF):
	        cnd = new CND_NEVER();
	        break;
        case ((-40 << 16) | 0xFFFF):
	        cnd = new CND_RUNNINGAS();
	        break;
	    case ((-39 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_GT();
	        break;
	    case ((-38 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_GE();
	        break;
	    case ((-37 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_LT();
	        break;
	    case ((-36 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_LE();
	        break;
	    case ((-35 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_NE();
	        break;
	    case ((-34 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_EQ();
	        break;
	    case ((-33 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_GT();
	        break;
	    case ((-32 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_GE();
	        break;
	    case ((-31 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_LT();
	        break;
	    case ((-30 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_LE();
	        break;
	    case ((-29 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_NE();
	        break;
	    case ((-28 << 16) | 0xFFFF):
	        cnd = new CND_COMPAREGCONST_EQ();
	        break;
	    case ((-27 << 16) | 0xFFFF):    // ELSE IF
			cnd = new CND_NEVER();
			break;
		case ((-26 << 16) | 0xFFFF):
			cnd = new CND_CHANCE();
			break;
		case ((-25 << 16) | 0xFFFF):		// CND_ORLOGICAL
			cnd = new CND_NEVER();
			break;
		case ((-24 << 16) | 0xFFFF):		// CND_OR		
			cnd = new CND_NEVER();
			break;
		case ((-23 << 16) | 0xFFFF):
			cnd = new CND_GROUPSTART();
			break;
		case ((-20 << 16) | 0xFFFF):
			cnd = new CND_COMPAREGSTRING();
			break;
		case ((-16 << 16) | 0xFFFF):
			cnd = new CND_ONLOOP();
			break;
		case ((-12 << 16) | 0xFFFF):
			cnd = new CND_GROUPACTIVATED();
			break;
		case ((-11 << 16) | 0xFFFF):
			cnd = new CND_NEVER();
			break;
		case ((-10 << 16) | 0xFFFF):
			cnd = new CND_NEVER();
			break;
		case ((-9 << 16) | 0xFFFF):
			cnd = new CND_NEVER();
			break;
		case ((-8 << 16) | 0xFFFF):
			cnd = new CND_COMPAREG();
			break;
		case ((-7 << 16) | 0xFFFF):
			cnd = new CND_NOTALWAYS();
			break;
		case ((-6 << 16) | 0xFFFF):
			cnd = new CND_ONCE();
			break;
		case ((-5 << 16) | 0xFFFF):
			cnd = new CND_REPEAT();
			break;
		case ((-4 << 16) | 0xFFFF):
			cnd = new CND_NOMORE();
			break;
		case ((-3 << 16) | 0xFFFF):
			cnd = new CND_COMPARE();
			break;
		case ((-2 << 16) | 0xFFFF):
			cnd = new CND_NEVER();
			break;
		case ((-1 << 16) | 0xFFFF):
			cnd = new CND_ALWAYS();
			break;
		case ((-9 << 16) | 0xFFFE):
			cnd = new CND_SPCHANNELPAUSED();
			break;
		case ((-8 << 16) | 0xFFFE):
			cnd = new CND_NOSPCHANNELPLAYING();
			break;
		case ((-6 << 16) | 0xFFFE):
			cnd = new CND_SPSAMPAUSED();
			break;
		case ((-3 << 16) | 0xFFFE):
			cnd = new CND_NOSAMPLAYING;
			break;
		case ((-1 << 16) | 0xFFFE):
			cnd = new CND_NOSPSAMPLAYING();
			break;
		case ((-8 << 16) | 0xFFFD):
			cnd = new CND_ENDOFPAUSE();
			break;
		case ((-7 << 16) | 0xFFFD):
			cnd = new CND_ISVSYNCON();
			break;
		case ((-6 << 16) | 0xFFFD):
			cnd = new CND_ISLADDER();
			break;
		case ((-5 << 16) | 0xFFFD):
			cnd = new CND_ISOBSTACLE();
			break;
		case ((-4 << 16) | 0xFFFD):
			cnd = new CND_QUITAPPLICATION();
			break;
		case ((-3 << 16) | 0xFFFD):
			cnd = new CND_LEVEL();
			break;
		case ((-2 << 16) | 0xFFFD):
			cnd = new CND_END();
			break;
		case ((-1 << 16) | 0xFFFD):
			cnd = new CND_START();
			break;
		case ((-8 << 16) | 0xFFFC):
			cnd = new CND_EVERY2();
			break;
		case ((-7 << 16) | 0xFFFC):
			cnd = new CND_TIMEREQUALS();
			break;
		case ((-6 << 16) | 0xFFFC):
			cnd = new CND_ONEVENT();
			break;
		case ((-5 << 16) | 0xFFFC):
			cnd = new CND_TIMEOUT();
			break;
		case ((-4 << 16) | 0xFFFC):
			cnd = new CND_EVERY();
			break;
		case ((-3 << 16) | 0xFFFC):
			cnd = new CND_TIMER();
			break;
		case ((-2 << 16) | 0xFFFC):
			cnd = new CND_TIMERINF();
			break;
		case ((-1 << 16) | 0xFFFC):
			cnd = new CND_TIMERSUP();
			break;
		case ((-12 << 16) | 0xFFFA):
			cnd = new CND_ONMOUSEWHEELDOWN();
			break;
		case ((-11 << 16) | 0xFFFA):
			cnd = new CND_ONMOUSEWHEELUP();
			break;
		case ((-10 << 16) | 0xFFFA):
			cnd = new CND_MOUSEON();
			break;
		case ((-9 << 16) | 0xFFFA):
			cnd = new CND_ANYKEY();
			break;
		case ((-8 << 16) | 0xFFFA):
			cnd = new CND_MKEYDEPRESSED();
			break;
		case ((-7 << 16) | 0xFFFA):
			cnd = new CND_MCLICKONOBJECT();
			break;
		case ((-6 << 16) | 0xFFFA):
			cnd = new CND_MCLICKINZONE();
			break;
		case ((-5 << 16) | 0xFFFA):
			cnd = new CND_MCLICK();
			break;
		case ((-4 << 16) | 0xFFFA):
			cnd = new CND_MONOBJECT();
			break;
		case ((-3 << 16) | 0xFFFA):
			cnd = new CND_MINZONE();
			break;
		case ((-2 << 16) | 0xFFFA):
			cnd = new CND_KBKEYDEPRESSED();
			break;
		case ((-1 << 16) | 0xFFFA):
			cnd = new CND_KBPRESSKEY();
			break;
		case ((-6 << 16) | 0xFFF9):
			cnd = new CND_JOYPUSHED();
			break;
		case ((-5 << 16) | 0xFFF9):
			cnd = new CND_NOMORELIVE();
			break;
		case ((-4 << 16) | 0xFFF9):
			cnd = new CND_JOYPRESSED();
			break;
		case ((-3 << 16) | 0xFFF9):
			cnd = new CND_LIVE();
			break;
		case ((-2 << 16) | 0xFFF9):
			cnd = new CND_SCORE();
			break;
		case ((-1 << 16) | 0xFFF9):
			cnd = new CND_PLAYERPLAYING();
			break;
		case ((-23 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEALLINLINE();
			break;
		case ((-22 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEFLAGRESET();
			break;
		case ((-21 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEFLAGSET();
			break;
		case ((-20 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEVALUE();
			break;
		case ((-19 << 16) | 0xFFFB):
			cnd = new CND_PICKFROMID();
			break;
		case ((-18 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEALLINZONE();
			break;
		case ((-17 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEALL();
			break;
		case ((-16 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEZONE();
			break;
		case ((-15 << 16) | 0xFFFB):
			cnd = new CND_NUMOFALLOBJECT();
			break;
		case ((-14 << 16) | 0xFFFB):
			cnd = new CND_NUMOFALLZONE();
			break;
		case ((-13 << 16) | 0xFFFB):
			cnd = new CND_NOMOREALLZONE();
			break;
		case ((-12 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEFLAGRESET_OLD();
			break;
		case ((-11 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEFLAGSET_OLD();
			break;
		case ((-8 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEVALUE_OLD();
			break;
		case ((-7 << 16) | 0xFFFB):
			cnd = new CND_PICKFROMID_OLD();
			break;
		case ((-6 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEALLINZONE_OLD();
			break;
		case ((-5 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEALL_OLD();
			break;
		case ((-4 << 16) | 0xFFFB):
			cnd = new CND_CHOOSEZONE_OLD();
			break;
		case ((-3 << 16) | 0xFFFB):
			cnd = new CND_NUMOFALLOBJECT_OLD();
			break;
		case ((-2 << 16) | 0xFFFB):
			cnd = new CND_NUMOFALLZONE_OLD();
			break;
		case ((-1 << 16) | 0xFFFB):
			cnd = new CND_NOMOREALLZONE_OLD();
			break;
        case (((-80 - 4) << 16) | 2):
            cnd = new CND_CMPSCALEY();
            break;
        case (((-80 - 3) << 16) | 2):
            cnd = new CND_CMPSCALEX();
            break;
        case (((-80 - 2) << 16) | 2):
            cnd = new CND_CMPANGLE();
            break;
		case (((-80 - 1) << 16) | 7):
			cnd = new CND_CCOUNTER();
			break;
		case (((-80 - 3) << 16) | 4):
			cnd = new CND_QEQUAL();
			break;
		case (((-80 - 2) << 16) | 4):
			cnd = new CND_QFALSE();
			break;
		case (((-80 - 1) << 16) | 4):
			cnd = new CND_QEXACT();
			break;
		case (((-80 - 4) << 16) | (9 & 0x00FF)):
			cnd = new CND_CCAISPAUSED();
			break;
		case (((-80 - 3) << 16) | (9 & 0x00FF)):
			cnd = new CND_CCAISVISIBLE();
			break;
		case (((-80 - 2) << 16) | (9 & 0x00FF)):
			cnd = new CND_CCAAPPFINISHED();
			break;
		case (((-80 - 1) << 16) | (9 & 0x00FF)):
			cnd = new CND_CCAFRAMECHANGED();
			break;
		default:
			switch (c & 0xFFFF0000)
			{
                case (-49 << 16):
                    cnd = new CND_EXTCMPINSTANCEDATA();
                    break;
                case (-48 << 16):
                    cnd = new CND_EXTPICKMAXVALUE();
                    break;
                case (-47 << 16):
                    cnd = new CND_EXTPICKMINVALUE();
                    break;
                case (-46 << 16):
                    cnd = new CND_EXTCMPLAYER();
                    break;
                case (-45 << 16):
                    cnd = new CND_EXTCOMPARE();
                    break;
                case (-44 << 16):
                    cnd = new CND_EXTPICKCLOSEST();
                    break;
			    case (-43 << 16):
			        cnd = new CND_EXTCMPVARCONST();
			        break;
			    case (-42 << 16):
			        cnd = new CND_EXTCMPVARCONST();
			        break;
			    case (-41 << 16):
					cnd = new CND_EXTONLOOP();
					break;
				case (-40 << 16):
					cnd = new CND_EXTISSTRIKEOUT();
					break;
				case (-39 << 16):
					cnd = new CND_EXTISUNDERLINE();
					break;
				case (-38 << 16):
					cnd = new CND_EXTISITALIC();
					break;
				case (-37 << 16):
					cnd = new CND_EXTISBOLD();
					break;
				case (-36 << 16):
					cnd = new CND_EXTCMPVARSTRING();
					break;
				case (-35 << 16):
					cnd = new CND_EXTPATHNODENAME();
					break;
				case (-34 << 16):
					cnd = new CND_EXTCHOOSE();
					break;
				case (-33 << 16):
					cnd = new CND_EXTNOMOREOBJECT();
					break;
				case (-32 << 16):
					cnd = new CND_EXTNUMOFOBJECT();
					break;
				case (-31 << 16):
					cnd = new CND_EXTNOMOREZONE();
					break;
				case (-30 << 16):
					cnd = new CND_EXTNUMBERZONE();
					break;
				case (-29 << 16):
					cnd = new CND_EXTSHOWN();
					break;
				case (-28 << 16):
					cnd = new CND_EXTHIDDEN();
					break;
				case (-27 << 16):
					cnd = new CND_EXTCMPVAR();
					break;
				case (-26 << 16):
					cnd = new CND_EXTCMPVARFIXED();
					break;
				case (-25 << 16):
					cnd = new CND_EXTFLAGSET();
					break;
				case (-24 << 16):
					cnd = new CND_EXTFLAGRESET();
					break;
				case (-23 << 16):
					cnd = new CND_EXTISCOLBACK();
					break;
				case (-22 << 16):
					cnd = new CND_EXTNEARBORDERS();
					break;
				case (-21 << 16):
					cnd = new CND_EXTENDPATH();
					break;
				case (-20 << 16):
					cnd = new CND_EXTPATHNODE();
					break;
				case (-19 << 16):
					cnd = new CND_EXTCMPACC();
					break;
				case (-18 << 16):
					cnd = new CND_EXTCMPDEC();
					break;
				case (-17 << 16):
					cnd = new CND_EXTCMPX();
					break;
				case (-16 << 16):
					cnd = new CND_EXTCMPY();
					break;
				case (-15 << 16):
					cnd = new CND_EXTCMPSPEED();
					break;
				case (-14 << 16):
					cnd = new CND_EXTCOLLISION();
					break;
				case (-13 << 16):
					cnd = new CND_EXTCOLBACK();
					break;
				case (-12 << 16):
					cnd = new CND_EXTOUTPLAYFIELD();
					break;
				case (-11 << 16):
					cnd = new CND_EXTINPLAYFIELD();
					break;
				case (-10 << 16):
					cnd = new CND_EXTISOUT();
					break;
				case (-9 << 16):
					cnd = new CND_EXTISIN();
					break;
				case (-8 << 16):
					cnd = new CND_EXTFACING();
					break;
				case (-7 << 16):
					cnd = new CND_EXTSTOPPED();
					break;
				case (-6 << 16):
					cnd = new CND_EXTBOUNCING();
					break;
				case (-5 << 16):
					cnd = new CND_EXTREVERSED();
					break;
				case (-4 << 16):
					cnd = new CND_EXTISCOLLIDING();
					break;
				case (-3 << 16):
					cnd = new CND_EXTANIMPLAYING();
					break;
				case (-2 << 16):
					cnd = new CND_EXTANIMENDOF();
					break;
				case (-1 << 16):
					cnd = new CND_EXTCMPFRAME();
					break;
				default:
					cnd = new CCndExtension();
					break;
			}
	}
	if (cnd != null)
	{
		cnd.evtCode = c;
		cnd.evtOi = app.file.readShort();
		cnd.evtOiList = app.file.readShort();
		cnd.evtFlags = app.file.readAByte();
		cnd.evtFlags2 = app.file.readAByte();
		cnd.evtNParams = app.file.readAByte();
		cnd.evtDefType = app.file.readAByte();
		cnd.evtIdentifier = app.file.readAShort();

		if (cnd.evtNParams > 0)
		{
			cnd.evtParams = new Array(cnd.evtNParams);
			var n;
			for (n = 0; n < cnd.evtNParams; n++)
			{
				cnd.evtParams[n] = CParam.create(app);
			}
		}
	}
	app.file.seek(debut + size);

	return cnd;
}
CCnd.negaTRUE = function (evtPtr)
{
	if (evtPtr.evtFlags2 & CEvent.EVFLAG2_NOT)
		return false;
	return true;
}
CCnd.negaFALSE = function (evtPtr)
{
	if (evtPtr.evtFlags2 & CEvent.EVFLAG2_NOT)
		return true;
	return false;
}
CCnd.negate = function (evtPtr, b)
{
	if (evtPtr.evtFlags2 & CEvent.EVFLAG2_NOT)
		return !b;
	return b;
}
CCnd.compute_GlobalNoRepeat = function (rhPtr)
{
	var evgPtr = rhPtr.rhEvtProg.rhEventGroup;
	var inhibit = evgPtr.evgInhibit;
	evgPtr.evgInhibit = rhPtr.rhLoopCount;
	var loopCount = rhPtr.rhLoopCount;
	if (loopCount == inhibit)
		return false;
	loopCount--;
	if (loopCount == inhibit)
		return false;
	return true;
}
CCnd.compute_NoRepeatCol = function (identifier, pHo)
{
	var id;
	var n;

	var pArray = pHo.hoBaseNoRepeat;
	if (pArray == null)
	{
		pArray = new CArrayList();
		pHo.hoBaseNoRepeat = pArray;
	}
	else
	{
		for (n = 0; n < pArray.size(); n++)
		{
			if (pArray.get(n) == identifier)
				return false;
		}
	}
	pArray.add(identifier);

	pArray = pHo.hoPrevNoRepeat;
	if (pArray == null)
		return true;
	for (n = 0; n < pArray.size(); n++)
	{
		if (pArray.get(n) == identifier)
			return false;
	}
	return true;
}
CCnd.checkMark = function (rhPtr, mark)
{
	if (mark == 0) return false;
	if (mark == rhPtr.rhLoopCount) return true;
	if (mark == rhPtr.rhLoopCount - 1) return true;
	return false;
}
function CND_NEVER()
{
}
CND_NEVER.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return false;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
function CND_ALWAYS()
{
}
CND_ALWAYS.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return true;
	}
}
function CCnd()
{
}
CCnd.prototype =
{
	compute_NoRepeat:  function (pHo)
	{
		return CCnd.compute_NoRepeatCol(this.evtIdentifier, pHo);
	},
	evaChooseValueOld: function (rhPtr, pRoutine)
	{
		var cpt = 0;

		var pHo = rhPtr.rhEvtProg.evt_FirstObjectFromType(COI.OBJ_SPR);
		while (pHo != null)
		{
			cpt++;
			var value = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			if (pRoutine.evaluate(pHo, value) == false)
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObjectFromType();
		}
		if (cpt != 0)
			return true;
		return false;
	},
	evaChooseValue:    function (rhPtr, pRoutine)
	{
		var cpt = 0;

		var pHo = rhPtr.rhEvtProg.evt_FirstObjectFromType(-1);
		while (pHo != null)
		{
			cpt++;
			var value = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			if (pRoutine.evaluate(pHo, value) == false)
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObjectFromType();
		}
		if (cpt != 0)
			return true;
		return false;
	},
	evaExpObject:      function (rhPtr, pRoutine)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		var p = this.evtParams[0];
		var value;

		var token = p.tokens[0];
		if ( (token.code == CExp.EXP_LONG || token.code == CExp.EXP_DOUBLE) && p.tokens[1].code == 0 )
		{
			var value = token.value;
			while (pHo != null)
			{
				if (pRoutine.evaExpRoutine(pHo, value, p.comparaison) == false)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
				pHo = rhPtr.rhEvtProg.evt_NextObject();
			}
		}
		else
		{
			while (pHo != null)
			{
				value = rhPtr.get_EventExpressionInt(p);
				if (pRoutine.evaExpRoutine(pHo, value, p.comparaison) == false)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
				pHo = rhPtr.rhEvtProg.evt_NextObject();
			}
		}
		if (cpt != 0)
			return true;
		return false;
	},
	evaObject:         function (rhPtr, pRoutine)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		while (pHo != null)
		{
			if (pRoutine.evaObjectRoutine(pHo) == false)
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		}
		if (cpt != 0)
			return true;
		return false;
	},
	compareCondition:  function (rhPtr, param, v)
	{
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[param]);
		var comp = this.evtParams[param].comparaison;
		return CRun.compareTo(v, value2, comp);
	},
	isColliding:       function (rhPtr)
	{
		if (rhPtr.rhEvtProg.rh4ConditionsFalse)
		{
			rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
			rhPtr.rhEvtProg.evt_FirstObject(this.evtParams[0].oiList);
			return false;
		}

		var negate = false;
		if ((this.evtFlags2 & CEvent.EVFLAG2_NOT) != 0)
			negate = true;

		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		if (pHo == null)
			return CCnd.negaFALSE(this);
		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;

		var oi = this.evtParams[0].oi;
		var oi2List;
		if (oi >= 0)
		{
			rhPtr.isColArray[0] = oi;
			rhPtr.isColArray[1] = this.evtParams[0].oiList;
			oi2List = rhPtr.isColArray;
		}
		else
		{
			var qoil = rhPtr.rhEvtProg.qualToOiList[this.evtParams[0].oiList & 0x7FFF];
			oi2List = qoil.qoiList;
		}

		var bFlag = false;
		var list;
		var list2 = new CArrayList();
		var index, n;
		var pHo2;
		do
		{
            // Test at a specific position?
            var hox = pHo.hoX;
            var hoy = pHo.hoY;
            if (this.evtNParams >= 3) {
                hox = rhPtr.get_EventExpressionInt(this.evtParams[1]);
                hoy = rhPtr.get_EventExpressionInt(this.evtParams[2]);
            }

            list = rhPtr.objectAllCol_IXY(pHo, pHo.roc.rcImage, pHo.roc.rcAngle, pHo.roc.rcScaleX, pHo.roc.rcScaleY, hox, hoy, oi2List);
			if (list == null)
			{
				if (negate == false)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
			}
			else
			{
				bFlag = false;
				for (index = 0; index < list.size(); index++)
				{
					pHo2 = list.get(index);
					if ((pHo2.hoFlags & CObject.HOF_DESTROYED) == 0)
					{
						list2.add(pHo2);
						bFlag = true;
					}
				}

				if (negate == true)
				{
					if (bFlag == true)
					{
						cpt--;
						rhPtr.rhEvtProg.evt_DeleteCurrentObject();
					}
				}
				else
				{
					if (bFlag == false)
					{
						cpt--;
						rhPtr.rhEvtProg.evt_DeleteCurrentObject();
					}
				}
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		} while (pHo != null);

		if (cpt == 0)
			return false;

		pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtParams[0].oiList);
		if (pHo == null) return false;
		cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		if (negate == false)
		{
			do
			{
				for (index = 0; index < list2.size(); index++)
				{
					pHo2 = list2.get(index);
					if (pHo == pHo2)
					{
						break;
					}
				}
				if (index == list2.size())
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
				pHo = rhPtr.rhEvtProg.evt_NextObject();
			} while (pHo != null);
			if (cpt != 0) return true;
			return false;
		}

		do
		{
			for (index = 0; index < list2.size(); index++)
			{
				pHo2 = list2.get(index);
				if (pHo == pHo2)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
					break;
				}
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		} while (pHo != null);
		if (cpt != 0) return true;
		return false;
	}
}
// CUT

// System conditions
// ------------------------------------------------------------------

function CND_CHANCE()
{
}
CND_CHANCE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var param1 = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		var param2 = rhPtr.get_EventExpressionInt(this.evtParams[1]);
		if (param1 >= param2)
		    return true;
		if (param2 >= 1 && param1 > 0 && param1 <= param2)
		{
			var rnd = rhPtr.random(param2);
			if (rnd <= param1)
			{
				return true;
			}
		}
		return false;
	}
}
// CUT

function CND_COMPARE()
{
}
CND_COMPARE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var value1 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);
		var comp = this.evtParams[1].comparaison;
		return CRun.compareTo(value1, value2, comp);
	}
}
// CUT

function CND_COMPAREG()
{
}
CND_COMPAREG.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var num;
		if (this.evtParams[0].code == 52)
			num = rhPtr.get_EventExpressionInt(this.evtParams[0]) - 1;
		else
			num = this.evtParams[0].value;

		var gValue = rhPtr.rhApp.getGlobalValueAt(num);
		var value = rhPtr.get_EventExpressionAny(this.evtParams[1]);
		var comp = this.evtParams[1].comparaison;
		return CRun.compareTo(gValue, value, comp);
	}
}
// -- CUT

function CND_COMPAREGCONST_EQ() {
}
CND_COMPAREGCONST_EQ.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue == value;
    }
}
// -- CUT

function CND_COMPAREGCONST_NE() {
}
CND_COMPAREGCONST_NE.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue != value;
    }
}
// -- CUT

function CND_COMPAREGCONST_LE() {
}
CND_COMPAREGCONST_LE.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue <= value;
    }
}
// -- CUT

function CND_COMPAREGCONST_LT() {
}
CND_COMPAREGCONST_LT.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue < value;
    }
}
// -- CUT

function CND_COMPAREGCONST_GE() {
}
CND_COMPAREGCONST_GE.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue >= value;
    }
}
// -- CUT

function CND_COMPAREGCONST_GT() {
}
CND_COMPAREGCONST_GT.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var num = this.evtParams[0].value;
        var gValue = rhPtr.rhApp.getGlobalValueAt(num);
        var p = this.evtParams[1];
        var value = p.tokens[0].value;
        return gValue > value;
    }
}
// CUT

function CND_COMPAREGSTRING()
{
}
CND_COMPAREGSTRING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var num;
		if (this.evtParams[0].code == 59)
			num = rhPtr.get_EventExpressionInt(this.evtParams[0]) - 1;
		else
			num = this.evtParams[0].value;

		var gString = rhPtr.rhApp.getGlobalStringAt(num);
		var value = rhPtr.get_EventExpressionAny(this.evtParams[1]);
		var comp = this.evtParams[1].comparaison;
		return CRun.compareTo(gString, value, comp);
	}
}
// CUT

function CND_GROUPACTIVATED()
{
}
CND_GROUPACTIVATED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.events[this.evtParams[0].pointer];
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_INACTIVE) != 0)
			return CCnd.negaFALSE(this);
		return CCnd.negaTRUE(this);
	}
}
// CUT

function CND_GROUPSTART()
{
}
CND_GROUPSTART.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.rhEventGroup;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_ONCE) != 0)
            return CCnd.negaFALSE(this);
		pEvg.evgFlags |= CEventGroup.EVGFLAGS_ONCE;
        return CCnd.negaTRUE(this);
	}
}
// CUT

function CND_NOMORE()
{
}
CND_NOMORE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.rhEventGroup;
        if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_NOMORE) != 0) {
            if (this.evtParams[0].code == CParam.PARAM_EXPRESSIONNUM)
                pEvg.evgInhibit = rhPtr.get_EventExpressionInt(this.evtParams[0]) / 10;
            return true;
        }
		if ((pEvg.evgFlags & (CEventGroup.EVGFLAGS_REPEAT | CEventGroup.EVGFLAGS_NOTALWAYS)) != 0)
			return false;

		if (this.evtParams[0].code == CParam.PARAM_EXPRESSIONNUM)
			pEvg.evgInhibit = rhPtr.get_EventExpressionInt(this.evtParams[0]) / 10;
		else
			pEvg.evgInhibit = (this.evtParams[0].timer / 10);
		pEvg.evgInhibitCpt = 0;
		pEvg.evgFlags |= CEventGroup.EVGFLAGS_NOMORE;
		return true;
	}
}
// CUT

function CND_NOTALWAYS()
{
}
CND_NOTALWAYS.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.rhEventGroup;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_NOTALWAYS) != 0)
			return true;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_NOMORE) != 0)
			return false;
		pEvg.evgInhibit = -2;
		pEvg.evgFlags |= CEventGroup.EVGFLAGS_NOTALWAYS;
		return true;
	}
}
// CUT

function CND_ONCE()
{
}
CND_ONCE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.rhEventGroup;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_ONCE) != 0)
			return false;
		pEvg.evgFlags |= CEventGroup.EVGFLAGS_ONCE;
		return true;
	}
}
// CUT

function CND_ONLOOP()
{
}
CND_ONLOOP.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var pExp = this.evtParams[0];
		if (pExp.tokens.length == 2 && pExp.tokens[0].code == ((3 << 16) | 65535) && pExp.tokens[1].code == 0)
		{
			if (CServices.compareStringsIgnoreCase(rhPtr.rh4CurrentFastLoop, pExp.tokens[0].string))
			{
				return true;
			}
			return false;
		}

		var pName = rhPtr.get_EventExpressionString(pExp);
		if (CServices.compareStringsIgnoreCase(rhPtr.rh4CurrentFastLoop, pName) == false)
			return false;
		rhPtr.rhEvtProg.rh2ActionOn = false;
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_REPEAT()
{
}
CND_REPEAT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pEvg = rhPtr.rhEvtProg.rhEventGroup;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_REPEAT) != 0)
			return true;
		if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_NOMORE) != 0)
			return false;

		pEvg.evgInhibitCpt = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		pEvg.evgFlags |= CEventGroup.EVGFLAGS_REPEAT;
		return true;
	}
}
// CUT


// Create object conditions
// -----------------------------------------------------------------
function CND_CHOOSEALL()
{
}
CND_CHOOSEALL.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ObjectsFromType(0, -1);
		if (rhPtr.rhEvtProg.evtNSelectedObjects == 0)
			return false;
		var rnd = rhPtr.random(rhPtr.rhEvtProg.evtNSelectedObjects);
		var pHo = rhPtr.rhEvtProg.count_ObjectsFromType(0, rnd);
		rhPtr.rhEvtProg.evt_DeleteCurrent();
		rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
		return true;
	}
}
// CUT

function CND_CHOOSEALL_OLD()
{
}
CND_CHOOSEALL_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ObjectsFromType(COI.OBJ_SPR, -1);
		if (rhPtr.rhEvtProg.evtNSelectedObjects == 0)
			return false;
		var rnd = rhPtr.random(rhPtr.rhEvtProg.evtNSelectedObjects);
		var pHo = rhPtr.rhEvtProg.count_ObjectsFromType(COI.OBJ_SPR, rnd);
		rhPtr.rhEvtProg.evt_DeleteCurrentType(COI.OBJ_SPR);
		rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
		return true;
	}
}
// CUT

function CND_CHOOSEALLINLINE()
{
}
CND_CHOOSEALLINLINE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var x1 = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		var y1 = rhPtr.get_EventExpressionInt(this.evtParams[1]);
		var x2 = rhPtr.get_EventExpressionInt(this.evtParams[2]);
		var y2 = rhPtr.get_EventExpressionInt(this.evtParams[3]);

		if (rhPtr.rhEvtProg.select_LineOfSight(x1, y1, x2, y2) != 0)
			return true;
		return false;
	}
}
// CUT

function CND_CHOOSEALLINZONE()
{
}
CND_CHOOSEALLINZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhEvtProg.select_ZoneTypeObjects(this.evtParams[0], 0) != 0)
			return true;
		return false;
	}
}
// CUT

function CND_CHOOSEALLINZONE_OLD()
{
}
CND_CHOOSEALLINZONE_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhEvtProg.select_ZoneTypeObjects(this.evtParams[0], COI.OBJ_SPR) != 0)
			return true;
		return false;
	}
}
// CUT

function CND_CHOOSEFLAGRESET()
{
}
CND_CHOOSEFLAGRESET.prototype = CServices.extend(new CCnd(),
	{
		eva1:     function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:     function (rhPtr)
		{
			return this.evaChooseValue(rhPtr, this);
		},
		evaluate: function (pHo, value)
		{
			if (pHo.rov != null)
			{
				if ((pHo.rov.rvValueFlags & (1 << value)) == 0)
					return true;
			}
			return false;
		}
	});
// CUT

function CND_CHOOSEFLAGRESET_OLD()
{
}
CND_CHOOSEFLAGRESET_OLD.prototype = CServices.extend(new CCnd(),
	{
		eva1:     function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:     function (rhPtr)
		{
			return this.evaChooseValueOld(rhPtr, this);
		},
		evaluate: function (pHo, value)
		{
			if (pHo.rov != null)
			{
				if ((pHo.rov.rvValueFlags & (1 << value)) == 0)
					return true;
			}
			return false;
		}
	});
// CUT

function CND_CHOOSEFLAGSET()
{
}
CND_CHOOSEFLAGSET.prototype = CServices.extend(new CCnd(),
	{
		eva1:     function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:     function (rhPtr)
		{
			return this.evaChooseValue(rhPtr, this);
		},
		evaluate: function (pHo, value)
		{
			if (pHo.rov != null)
			{
				if ((pHo.rov.rvValueFlags & (1 << value)) != 0)
					return true;
			}
			return false;
		}
	});
// CUT

function CND_CHOOSEFLAGSET_OLD()
{
}
CND_CHOOSEFLAGSET_OLD.prototype = CServices.extend(new CCnd(),
	{
		eva1:     function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:     function (rhPtr)
		{
			return this.evaChooseValueOld(rhPtr, this);
		},
		evaluate: function (pHo, value)
		{
			if (pHo.rov != null)
			{
				if ((pHo.rov.rvValueFlags & (1 << value)) != 0)
					return true;
			}
			return false;
		}
	});
// CUT

function CND_CHOOSEVALUE()
{
}
CND_CHOOSEVALUE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var cpt = 0;

		var pHo = rhPtr.rhEvtProg.evt_FirstObjectFromType(-1);
		while (pHo != null)
		{
			cpt++;

			var number;
			if (this.evtParams[0].code == 53)
				number = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			else
				number = this.evtParams[0].value;
			var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);

			if (pHo.rov != null)
			{
				var value = pHo.rov.getValue(number);
				var comp = this.evtParams[1].comparaison;
				if (CRun.compareTo(value, value2, comp) == false)
				{
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
					cpt--;
				}
			}
			pHo = rhPtr.rhEvtProg.evt_NextObjectFromType();
		}
		;
		if (cpt != 0)
			return true;
		return false;
	}
}
// CUT

function CND_CHOOSEVALUE_OLD()
{
}
CND_CHOOSEVALUE_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var cpt = 0;

		var pHo = rhPtr.rhEvtProg.evt_FirstObjectFromType(COI.OBJ_SPR);
		while (pHo != null)
		{
			cpt++;

			var number;
			if (evtParams[0].code == 53)
				number = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			else
				number = this.evtParams[0].value;
			var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);

			if (pHo.rov != null)
			{
				var value = pHo.rov.getValue(number);
				var comp = this.evtParams[1].comparaison;
				if (CRun.compareTo(value, value2, comp) == false)
				{
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
					cpt--;
				}
			}
			pHo = rhPtr.rhEvtProg.evt_NextObjectFromType();
		}
		;
		if (cpt != 0)
			return true;
		return false;
	}
}
// CUT

function CND_CHOOSEZONE()
{
}
CND_CHOOSEZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		rhPtr.rhEvtProg.count_ZoneTypeObjects(p, -1, 0);
		if (rhPtr.rhEvtProg.evtNSelectedObjects == 0)
			return false;

		var rnd = rhPtr.random(rhPtr.rhEvtProg.evtNSelectedObjects);
		var pHo = rhPtr.rhEvtProg.count_ZoneTypeObjects(p, rnd, 0);
		rhPtr.rhEvtProg.evt_DeleteCurrent();
		rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
		return true;
	}
}
// CUT

function CND_CHOOSEZONE_OLD()
{
}
CND_CHOOSEZONE_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		rhPtr.rhEvtProg.count_ZoneTypeObjects(p, -1, COI.OBJ_SPR);
		if (rhPtr.rhEvtProg.evtNSelectedObjects == 0)
			return false;

		var rnd = rhPtr.random(rhPtr.rhEvtProg.evtNSelectedObjects);
		var pHo = rhPtr.rhEvtProg.count_ZoneTypeObjects(p, rnd, COI.OBJ_SPR);
		rhPtr.rhEvtProg.evt_DeleteCurrent();
		rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
		return true;
	}
}
// CUT

function CND_NOMOREALLZONE()
{
}
CND_NOMOREALLZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ZoneTypeObjects(this.evtParams[0], -1, 0);
		if (rhPtr.rhEvtProg.evtNSelectedObjects != 0)
			return false;
		return true;
	}
}
// CUT

function CND_NOMOREALLZONE_OLD()
{
}
CND_NOMOREALLZONE_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ZoneTypeObjects(this.evtParams[0], -1, COI.OBJ_SPR);
		if (rhPtr.rhEvtProg.evtNSelectedObjects != 0)
			return false;
		return true;
	}
}
// CUT

function CND_NUMOFALLOBJECT()
{
}
CND_NUMOFALLOBJECT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
		var comp = this.evtParams[0].comparaison;
		return CRun.compareTo(rhPtr.rhNObjects, value2, comp);
	}
}
// CUT

function CND_NUMOFALLOBJECT_OLD()
{
}
CND_NUMOFALLOBJECT_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ObjectsFromType(COI.OBJ_SPR, -1);
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
		var comp = this.evtParams[0].comparaison;
		return CRun.compareTo(rhPtr.rhEvtProg.evtNSelectedObjects, value2, comp);
	}
}
// CUT

function CND_NUMOFALLZONE()
{
}
CND_NUMOFALLZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ZoneTypeObjects(this.evtParams[0], -1, 0);
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);
		var comp = this.evtParams[1].comparaison;
		return CRun.compareTo(rhPtr.rhEvtProg.evtNSelectedObjects, value2, comp);
	}
}
// CUT

function CND_NUMOFALLZONE_OLD()
{
}
CND_NUMOFALLZONE_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ZoneTypeObjects(this.evtParams[0], -1, COI.OBJ_SPR);

		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);
		var comp = this.evtParams[1].comparaison;
		return CRun.compareTo(rhPtr.rhEvtProg.evtNSelectedObjects, value2, comp);
	}
}
// CUT

function CND_PICKFROMID()
{
}
CND_PICKFROMID.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var value = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		return rhPtr.rhEvtProg.pickFromId(value);
	}
}
// CUT

function CND_PICKFROMID_OLD()
{
}
CND_PICKFROMID_OLD.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var value = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		return rhPtr.rhEvtProg.pickFromId(value);
	}
}
// CUT

function CND_EXTCHOOSE()
{
}
CND_EXTCHOOSE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		rhPtr.rhEvtProg.count_ObjectsFromOiList(this.evtOiList, -1);
		if (rhPtr.rhEvtProg.evtNSelectedObjects == 0)
			return false;
		var rnd = rhPtr.random(rhPtr.rhEvtProg.evtNSelectedObjects);
		var pHo = rhPtr.rhEvtProg.count_ObjectsFromOiList(this.evtOiList, rnd);
		if ( this.evtNParams > 0 )
		{
		    var p = this.evtParams[0];
		    if (p.code == 68) {       // PARAM_MULTIPLEVAR)
		        if (p.evaluate(pHo) == false) {
		            return false;
		        }
		    }
		}
		rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, pHo);
		return true;
	}
}
// CUT

function CND_EXTCOMPARE() {
}
CND_EXTCOMPARE.prototype = {
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {

        var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
        if (pHo == null)
            return false;
        var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;

        var comp = this.evtParams[1].comparaison;

        // Qualifier?
        var pqoi = null;
        var saveQoiOi;
        var saveQoiOiList;
        var oil = this.evtOiList;
        if ((oil & 0x8000) != 0) {
            // Modify first object in qualifier object list as Get_CurrentExpressionObjects takes the first selected object from this list
            pqoi = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
            saveQoiOi = pqoi.qoiList[0];
            saveQoiOiList = pqoi.qoiList[1];
        }

        while (pHo != null) {
            // Save selection and set current object as first selected (warning: selection chain is broken, this is just for GetExpression)
            var poil = pHo.hoOiList;
            var saveOILEventCount = poil.oilEventCount;
            poil.oilEventCount = rhPtr.rhEvtProg.rh2EventCount;
            var saveOILListSelected = poil.oilListSelected;
            poil.oilListSelected = pHo.hoNumber;
            var saveHONextSelected = pHo.hoNextSelected;		// this is not required for GetExpression but this is in case some extension objects scan the object list in expressions
            pHo.hoNextSelected = -1;
            if (pqoi != null) {
                // Qualifier? force first OI
                pqoi.qoiList[0] = pHo.hoOi;
                pqoi.qoiList[1] = poil.oilIndex;
            }

            // Get expressions
            var value1 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
            var value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);

            // Restore selection
            poil.oilEventCount = saveOILEventCount;
            poil.oilListSelected = saveOILListSelected;
            pHo.hoNextSelected = saveHONextSelected;

            // Compare expressions
            if (CRun.compareTo(value1, value2, comp) == false) {
                cpt--;
                rhPtr.rhEvtProg.evt_DeleteCurrentObject();
            }

            pHo = rhPtr.rhEvtProg.evt_NextObject();
        }

        // Restore first qualifier object
        if (pqoi != null) {
            pqoi.qoiList[0] = saveQoiOi;
            pqoi.qoiList[1] = saveQoiOiList;
        }

        return (cpt != 0);
    }
}
// CUT

function CND_EXTPICKCLOSEST() {
}
CND_EXTPICKCLOSEST.prototype = {
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {

        var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
        if (pHo == null)
            return false;
        var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;

        var oi = this.evtParams[0].oi;
        var oi2List;
        if (oi >= 0) {
            rhPtr.isColArray[0] = oi;
            rhPtr.isColArray[1] = this.evtParams[0].oiList;
            oi2List = rhPtr.isColArray;
        }
        else {
            var qoil = rhPtr.rhEvtProg.qualToOiList[this.evtParams[0].oiList & 0x7FFF];
            oi2List = qoil.qoiList;
        }

        // For each object 1
        var minDistance;
        var hoList = new CArrayList();
        do {
            // Check if it's closer from object(s) 2 than previous objects 1
            var nOi = 0;
            for (nOi = 0; nOi < oi2List.length; nOi += 2) {
                var poil = rhPtr.rhOiList[oi2List[nOi + 1]];

                // Already selected in event?
                if (poil.oilEventCount == rhPtr.rhEvtProg.rh2EventCount) {
                    // Explore selected object list
                    var num = poil.oilListSelected;
                    while (num >= 0) {
                        var pHo2 = rhPtr.rhObjectList[num];
                        if (pHo2 == null)
                            break;
                        if ((pHo2.hoFlags & CObject.HOF_DESTROYED) == 0) {
                            var distance = (pHo2.hoX - pHo.hoX) * (pHo2.hoX - pHo.hoX) + (pHo2.hoY - pHo.hoY) * (pHo2.hoY - pHo.hoY);
                            if (hoList.size() == 0) {
                                minDistance = distance;
                                hoList.add(pHo);
                            }
                            else if (distance <= minDistance) {
                                if (distance == minDistance)
                                    hoList.add(pHo);
                                else {
                                    minDistance = distance;
                                    hoList.clear();
                                    hoList.add(pHo);
                                }
                            }
                        }
                        num = pHo2.hoNextSelected;
                    }
                }

                // Not selected => take full list
                else {
                    if (poil.oilNObjects != 0) {
                        var nObl = poil.oilObject;

                        do {
                            var pHo2 = rhPtr.rhObjectList[nObl];
                            if (pHo2 == null)
                                break;
                            if ((pHo2.hoFlags & CObject.HOF_DESTROYED) == 0) {
                                var distance = (pHo2.hoX - pHo.hoX) * (pHo2.hoX - pHo.hoX) + (pHo2.hoY - pHo.hoY) * (pHo2.hoY - pHo.hoY);
                                if (hoList.size() == 0) {
                                    minDistance = distance;
                                    hoList.add(pHo);
                                }
                                else if (distance <= minDistance) {
                                    if (distance == minDistance)
                                        hoList.add(pHo);
                                    else {
                                        minDistance = distance;
                                        hoList.clear();
                                        hoList.add(pHo);
                                    }
                                }
                            }

                            nObl = pHo2.hoNumNext;
                        } while (nObl >= 0);
                    }
                }
            }

            // Next object 1
            pHo = rhPtr.rhEvtProg.evt_NextObject();

        } while (pHo != null);

        if (hoList.size() == 0)
            return false;

        if (hoList.size() == 1)
            rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, hoList.get(0));
        else
            rhPtr.rhEvtProg.evt_SelectObjects(this.evtOiList, hoList);

        return true;
    }
}
// CUT

function CND_EXTPICKMAXVALUE() {
}
CND_EXTPICKMAXVALUE.prototype = {
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {

        var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
        if (pHo == null)
            return false;
        var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;

        // Qualifier?
        var pqoi = null;
        var saveQoiOi;
        var saveQoiOiList;
        var oil = this.evtOiList;
        if ((oil & 0x8000) != 0) {
            // Modify first object in qualifier object list as Get_CurrentExpressionObjects takes the first selected object from this list
            pqoi = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
            saveQoiOi = pqoi.qoiList[0];
            saveQoiOiList = pqoi.qoiList[1];
        }

        // For each object 1
        var maxValue;
        var hoList = new CArrayList();
        while (pHo != null) {
            if ((pHo.hoFlags & CObject.HOF_DESTROYED) == 0) {
                // Save selection and set current object as first selected (warning: selection chain is broken, this is just for GetExpression)
                var poil = pHo.hoOiList;
                var saveOILEventCount = poil.oilEventCount;
                poil.oilEventCount = rhPtr.rhEvtProg.rh2EventCount;
                var saveOILListSelected = poil.oilListSelected;
                poil.oilListSelected = pHo.hoNumber;
                var saveHONextSelected = pHo.hoNextSelected;		// this is not required for GetExpression but this is in case some extension objects scan the object list in expressions
                pHo.hoNextSelected = -1;
                if (pqoi != null) {
                    // Qualifier? force first OI
                    pqoi.qoiList[0] = pHo.hoOi;
                    pqoi.qoiList[1] = poil.oilIndex;
                }

                // Get expressions
                var value = rhPtr.get_EventExpressionAny(this.evtParams[0]);
                if (hoList.size() == 0) {
                    maxValue = value;
                    hoList.add(pHo);
                }
                else if (value >= maxValue) {
                    if (value == maxValue)
                        hoList.add(pHo);
                    else {
                        maxValue = value;
                        hoList.clear();
                        hoList.add(pHo);
                    }
                }

                // Restore selection
                poil.oilEventCount = saveOILEventCount;
                poil.oilListSelected = saveOILListSelected;
                pHo.hoNextSelected = saveHONextSelected;
            }

            pHo = rhPtr.rhEvtProg.evt_NextObject();
        }

        // Restore first qualifier object
        if (pqoi != null) {
            pqoi.qoiList[0] = saveQoiOi;
            pqoi.qoiList[1] = saveQoiOiList;
        }

        if (hoList.size() == 0)
            return false;

        if (hoList.size() == 1)
            rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, hoList.get(0));
        else
            rhPtr.rhEvtProg.evt_SelectObjects(this.evtOiList, hoList);

        return true;
    }
}
// CUT

function CND_EXTPICKMINVALUE() {
}
CND_EXTPICKMINVALUE.prototype = {
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {

        var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
        if (pHo == null)
            return false;
        var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;

        // Qualifier?
        var pqoi = null;
        var saveQoiOi;
        var saveQoiOiList;
        var oil = this.evtOiList;
        if ((oil & 0x8000) != 0) {
            // Modify first object in qualifier object list as Get_CurrentExpressionObjects takes the first selected object from this list
            pqoi = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
            saveQoiOi = pqoi.qoiList[0];
            saveQoiOiList = pqoi.qoiList[1];
        }

        // For each object 1
        var minValue;
        var hoList = new CArrayList();
        while (pHo != null) {
            if ((pHo.hoFlags & CObject.HOF_DESTROYED) == 0) {
                // Save selection and set current object as first selected (warning: selection chain is broken, this is just for GetExpression)
                var poil = pHo.hoOiList;
                var saveOILEventCount = poil.oilEventCount;
                poil.oilEventCount = rhPtr.rhEvtProg.rh2EventCount;
                var saveOILListSelected = poil.oilListSelected;
                poil.oilListSelected = pHo.hoNumber;
                var saveHONextSelected = pHo.hoNextSelected;		// this is not required for GetExpression but this is in case some extension objects scan the object list in expressions
                pHo.hoNextSelected = -1;
                if (pqoi != null) {
                    // Qualifier? force first OI
                    pqoi.qoiList[0] = pHo.hoOi;
                    pqoi.qoiList[1] = poil.oilIndex;
                }

                // Get expressions
                var value = rhPtr.get_EventExpressionAny(this.evtParams[0]);
                if (hoList.size() == 0) {
                    minValue = value;
                    hoList.add(pHo);
                }
                else if (value <= minValue) {
                    if (value == minValue)
                        hoList.add(pHo);
                    else {
                        minValue = value;
                        hoList.clear();
                        hoList.add(pHo);
                    }
                }

                // Restore selection
                poil.oilEventCount = saveOILEventCount;
                poil.oilListSelected = saveOILListSelected;
                pHo.hoNextSelected = saveHONextSelected;
            }

            pHo = rhPtr.rhEvtProg.evt_NextObject();
        }

        // Restore first qualifier object
        if (pqoi != null) {
            pqoi.qoiList[0] = saveQoiOi;
            pqoi.qoiList[1] = saveQoiOiList;
        }

        if (hoList.size() == 0)
            return false;

        if (hoList.size() == 1)
            rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, hoList.get(0));
        else
            rhPtr.rhEvtProg.evt_SelectObjects(this.evtOiList, hoList);

        return true;
    }
}
// CUT

function CND_EXTCMPLAYER() {
}
CND_EXTCMPLAYER.prototype = CServices.extend(new CCnd(),
    {
        eva1: function (rhPtr, hoPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        eva2: function (rhPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        evaExpRoutine: function (hoPtr, value, comp) {
            return CRun.compareTer(hoPtr.hoLayer + 1, value, comp);		// +1 because layer indexes are 1-based
        }
    });
// CUT

function CND_EXTCMPINSTANCEDATA() {
}
CND_EXTCMPINSTANCEDATA.prototype = CServices.extend(new CCnd(),
    {
        eva1: function (rhPtr, hoPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        eva2: function (rhPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        evaExpRoutine: function (hoPtr, value, comp) {

            var instanceValue = 0;
            var hlo = hoPtr.hoHFII;
            if (hlo != -1) {
                var loPtr = hoPtr.hoAdRunHeader.rhFrame.LOList.getLOFromHandle(hlo);
                if (loPtr != null) {
                    instanceValue = loPtr.loValue;
                }
            }

            return CRun.compareTer(instanceValue, value, comp);		// +1 because layer indexes are 1-based
        }
    });
// CUT


function CND_EXTONLOOP()
{
}
CND_EXTONLOOP.prototype =
{
	eva1: function (rhPtr, pHo)
	{
		var pName = rhPtr.get_EventExpressionString(this.evtParams[0]);
		if (rhPtr.rh4CurrentForEach != null)
		{
			if (CServices.compareStringsIgnoreCase(rhPtr.rh4CurrentForEach.name, pName))
			{
			    if (this.evtNParams > 1) {
			        var p = this.evtParams[1];  // PARAM_MULTIPLEVAR
		            if (p.evaluate(pHo) == false) {
		                return false;
		            }
			    }
			    rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, pHo);
				return true;
			}
		}
		if (rhPtr.rh4CurrentForEach2 != null)
		{
			if (CServices.compareStringsIgnoreCase(rhPtr.rh4CurrentForEach2.name, pName))
			{
			    if (this.evtNParams > 1) {
			        var p = this.evtParams[1];  // PARAM_MULTIPLEVAR
			        if (p.evaluate(pHo) == false) {
			            return false;
			        }
			    }
			    rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, pHo);
				return true;
			}
		}
		return false;
	},
	eva2: function (rhPtr)
	{
		var pHo2 = null;
		var pName = rhPtr.get_EventExpressionString(this.evtParams[0]);
		var pForEach = rhPtr.rh4CurrentForEach;
		if (pForEach != null)
		{
			if (CServices.compareStringsIgnoreCase(pForEach.name, pName))
			{
			    if (pForEach.oi == this.evtOiList)
				{
					var index = pForEach.index % pForEach.number;
					pHo2 = pForEach.objects[index];
				}
			}
		}
		pForEach = rhPtr.rh4CurrentForEach2;
		if (pForEach != null)
		{
			if (CServices.compareStringsIgnoreCase(pForEach.name, pName))
			{
			    if (pForEach.oi == this.evtOiList)
				{
					var index = pForEach.index % pForEach.number;
					pHo2 = pForEach.objects[index];
				}
			}
		}
		if (pHo2 != null)
		{
		    if (this.evtNParams > 1) {
		        var p = this.evtParams[1];  // PARAM_MULTIPLEVAR
		        if (p.evaluate(pHo2) == false) {
		            return false;
		        }
		    }
		    rhPtr.rhEvtProg.evt_ForceOneObject(this.evtOiList, pHo2);
			return true;
		}
		return false;
	}
}
// CUT


// Storyboard object
// ---------------------------------------------------------------------
function CND_ENDOFPAUSE()
{
}
CND_ENDOFPAUSE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rh4EndOfPause != rhPtr.rhLoopCount - 1)
			return false;
		return true;
	}
}
// CUT


function CND_ISVSYNCON()
{
}
CND_ISVSYNCON.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return (rhPtr.rhApp.gaNewFlags & CRunApp.GANF_VSYNC) != 0 && window.requestAnimationFrame;
		;
	},
	eva2: function (rhPtr)
	{
		return (rhPtr.rhApp.gaNewFlags & CRunApp.GANF_VSYNC) != 0 && window.requestAnimationFrame;
		;
	}
}
// CUT

function CND_ISLADDER()
{
}
CND_ISLADDER.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var x = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		var y = rhPtr.get_EventExpressionInt(this.evtParams[1]);

		if (rhPtr.y_GetLadderAt(-1, x, y) != null)
			return CCnd.negaTRUE(this);
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_ISOBSTACLE()
{
}
CND_ISOBSTACLE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var x = rhPtr.get_EventExpressionInt(this.evtParams[0]) - rhPtr.rhWindowX;
		var y = rhPtr.get_EventExpressionInt(this.evtParams[1]) - rhPtr.rhWindowY;

		if (rhPtr.colMask_Test_XY(x, y, -1, CRunFrame.CM_TEST_OBSTACLE))
			return CCnd.negaTRUE(this);
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_QUITAPPLICATION()
{
}
CND_QUITAPPLICATION.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_LEVEL()
{
}
CND_LEVEL.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return false;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_END()
{
}
CND_END.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return true;
	}
}
// CUT

function CND_START()
{
}
CND_START.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		if (rhPtr.rhLoopCount > 2)
			return false;
		return true;
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhLoopCount > 2)
			return false;
		return true;
	}
}
// CUT


// Timer object
// -----------------------------------------------------------------------
function CND_ONEVENT()
{
}
CND_ONEVENT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pName = rhPtr.get_EventExpressionString(this.evtParams[0]);
		return CServices.compareStringsIgnoreCase(pName, rhPtr.rhEvtProg.rhCurParam0);
	}
}
// CUT
function CND_EVERY()
{
}
CND_EVERY.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		p.compteur -= rhPtr.rhTimerDelta;
		if (p.compteur > 0)
			return false;
		p.compteur += p.delay;
		return true;
	}
}
// CUT

function CND_TIMEOUT()
{
}
CND_TIMEOUT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var time;
		if (this.evtParams[0].code == 22)
			time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		else
			time = this.evtParams[0].timer;

		if (rhPtr.rh4TimeOut > time)
			return true;
		return false;
	}
}
// CUT

function CND_TIMER()
{
}
CND_TIMER.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		if ((this.evtFlags & CEvent.EVFLAGS_DONE) != 0)
			return  false;

		var time = this.evtParams[0].timer;
		if (rhPtr.rhTimer < time)
			return false;
		this.evtFlags |= CEvent.EVFLAGS_DONE;
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_TIMERINF()
{
}
CND_TIMERINF.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var time;
		if (this.evtParams[0].code == 22)
			time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		else
			time = this.evtParams[0].timer;

		if (rhPtr.rhTimer > time)
			return false;

		return true;
	}
}
// CUT

function CND_EVERY2()
{
}
CND_EVERY2.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var param2 = this.evtParams[1];
		var time;

		if (param2.value2 == 0)
		{
			if (this.evtParams[0].code == 22)
				time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			else
				time = this.evtParams[0].timer;
			param2.value = time;
			param2.value2 = -1;
		}
		else
		{
			param2.value -= rhPtr.rhTimerDelta;
			if (param2.value <= 0)
			{
				if (this.evtParams[0].code == 22)
					time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
				else
					time = this.evtParams[0].timer;
				param2.value += time;
				return true;
			}
		}
		return false;
	}
}
// CUT

function CND_TIMEREQUALS()
{
}
CND_TIMEREQUALS.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var time;
		if (this.evtParams[0].code == 22)
			time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		else
			time = this.evtParams[0].timer;

		var param2 = this.evtParams[1];
		if (rhPtr.rhTimer >= time)
		{
			if (param2.value == rhPtr.rhLoopCount)
			{
				param2.value = rhPtr.rhLoopCount + 1;
				return false;
			}
			param2.value = rhPtr.rhLoopCount + 1;
			return true;
		}
		return false;
	}
}
// CUT

function CND_TIMERSUP()
{
}
CND_TIMERSUP.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var time;
		if (this.evtParams[0].code == 22)
			time = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		else
			time = this.evtParams[0].timer;

		if (rhPtr.rhTimer > time)
			return true;

		return false;
	}
}
// CUT


// Player object
// --------------------------------------------------------------------
function CND_JOYPRESSED()
{
}
CND_JOYPRESSED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var joueur = this.evtOi;
		if (joueur != rhPtr.rhEvtProg.rhCurOi)
			return false;

		var j = rhPtr.rhEvtProg.rhCurParam0;
		j &= this.evtParams[0].value;
		if (j != this.evtParams[0].value)
			return false;
		return true;
	},
	eva2: function (rhPtr)
	{
		var joueur = this.evtOi;
		var b = (rhPtr.rh2NewPlayer[joueur] & rhPtr.rhPlayer[joueur]);

		var s = b;
		s &= this.evtParams[0].value;
		if (this.evtParams[0].value != s)
			return false;
		return true;
	}
}
// CUT

function CND_JOYPUSHED()
{
}
CND_JOYPUSHED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var s = rhPtr.rhPlayer[this.evtOi];
		s &= this.evtParams[0].value;
		if (s != this.evtParams[0].value)
			return CCnd.negaFALSE(this);
		return CCnd.negaTRUE(this);
	}
}
// CUT

function CND_LIVE()
{
}
CND_LIVE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
		var comp = this.evtParams[0].comparaison;
		return CRun.compareTo(rhPtr.rhApp.getLives()[this.evtOi], value2, comp);
	}
}
// CUT

function CND_NOMORELIVE()
{
}
CND_NOMORELIVE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhApp.getLives()[this.evtOi] != 0)
			return false;
		return true;
	}
}
// CUT

// TODO dans tous les runtimes
function CND_PLAYERPLAYING()
{
}
CND_PLAYERPLAYING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return false;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_SCORE()
{
}
CND_SCORE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var scores = rhPtr.rhApp.getScores();
		var value2 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
		var comp = this.evtParams[0].comparaison;
		return CRun.compareTo(scores[this.evtOi], value2, comp);
	}
}
// CUT


// Keyboard object
// -------------------------------------------------------------------
function CND_KBKEYDEPRESSED()
{
}
CND_KBKEYDEPRESSED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		return CCnd.negate(this, rhPtr.rhApp.keyBuffer[this.evtParams[0].key]);
	}
}
// CUT

function CND_KBPRESSKEY()
{
}
CND_KBPRESSKEY.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhApp.keyBuffer[this.evtParams[0].key] == false)
			return CCnd.negaFALSE(this);
		if (CCnd.compute_GlobalNoRepeat(rhPtr))
			return CCnd.negaTRUE(this);
		else
			return CCnd.negaFALSE(this);
	}
}

// CUT
function CND_MCLICK()
{
}
CND_MCLICK.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var key = rhPtr.rhEvtProg.rhCurParam0;
		if (this.evtParams[0].value != key)
			return false;
		return true;
	},
	eva2: function (rhPtr)
	{
		if (this.evtParams[0].value == rhPtr.rhEvtProg.rh2CurrentClick)
			return true;
		return false;
	}
}
// CUT

function CND_MCLICKINZONE()
{
}
CND_MCLICKINZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var key = rhPtr.rhEvtProg.rhCurParam0;
		if (this.evtParams[0].value == key)
		{
			var p = this.evtParams[1];
			if (rhPtr.rh2MouseX >= p.x1 && rhPtr.rh2MouseX < p.x2 && rhPtr.rh2MouseY >= p.y1 && rhPtr.rh2MouseY < p.y2)
			{
				return true;
			}
		}
		return false;
	},
	eva2: function (rhPtr)
	{
		if (this.evtParams[0].value == rhPtr.rhEvtProg.rh2CurrentClick)
		{
			var p = this.evtParams[1];
			if (rhPtr.rh2MouseX >= p.x1 && rhPtr.rh2MouseX < p.x2 && rhPtr.rh2MouseY >= p.y1 && rhPtr.rh2MouseY < p.y2)
			{
				return true;
			}
		}
		return false;
	}
}
// CUT

function CND_MCLICKONOBJECT()
{
}
CND_MCLICKONOBJECT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var p = this.evtParams[0];
		if (rhPtr.rhEvtProg.rhCurParam0 != p.value)
			return false;

		var oi = rhPtr.rhEvtProg.rhCurParam1;
		var po = this.evtParams[1];
		if (oi == po.oi)
		{
			rhPtr.rhEvtProg.evt_AddCurrentObject(rhPtr.rhEvtProg.rh4_2ndObject);
			return true;
		}

		var oil = po.oiList;
		if ((oil & 0x8000) == 0)
			return false;
		var qoil = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
		var qoi;
		for (qoi = 0; qoi < qoil.qoiList.length; qoi += 2)
		{
			if (qoil.qoiList[qoi] == oi)
			{
				rhPtr.rhEvtProg.evt_AddCurrentQualifier(oil);
				rhPtr.rhEvtProg.evt_AddCurrentObject(rhPtr.rhEvtProg.rh4_2ndObject);
				return true;
			}
		}
		return false;
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		if (rhPtr.rhEvtProg.rh2CurrentClick != p.value)
			return false;

		var po = this.evtParams[1];
		return rhPtr.getMouseOnObjectsEDX(po.oiList, false);
	}
}
// CUT

function CND_MINZONE()
{
}
CND_MINZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		if (rhPtr.rh2MouseX >= p.x1 && rhPtr.rh2MouseX < p.x2 && rhPtr.rh2MouseY >= p.y1 && rhPtr.rh2MouseY < p.y2)
			return CCnd.negaTRUE(this);
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_MKEYDEPRESSED()
{
}
CND_MKEYDEPRESSED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var code = 0;
		switch (this.evtParams[0].key)
		{
			case 1:
				code = CRunApp.VK_LBUTTON;
				break;
			case 2:
				code = CRunApp.VK_RBUTTON;
				break;
			case 4:
				code = CRunApp.VK_MBUTTON;
				break;
		}
		if (rhPtr.rhApp.keyBuffer[code] == false)
			return CCnd.negaFALSE(this);
		return CCnd.negaTRUE(this);
	}
}
// CUT

function CND_MONOBJECT()
{
}
CND_MONOBJECT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var flag = (this.evtFlags2 & CEvent.EVFLAG2_NOT) != 0;
		return rhPtr.getMouseOnObjectsEDX(this.evtParams[0].oiList, flag);
	}
}
// CUT

function CND_MOUSEON()
{
}
CND_MOUSEON.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.isMouseOn())
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_ONMOUSEWHEELDOWN()
{
}
CND_ONMOUSEWHEELDOWN.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhWheelCount == rhPtr.rh4EventCount)
		{
			return true;
		}
		return false;
	}
}
// CUT

function CND_ONMOUSEWHEELUP()
{
}
CND_ONMOUSEWHEELUP.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		if (rhPtr.rhWheelCount == rhPtr.rh4EventCount)
		{
			return true;
		}
		return false;
	}
}
// CUT

function CND_ANYKEY()
{
}
CND_ANYKEY.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

// Speaker object
// -----------------------------------------------------------------------
function CND_NOSAMPLAYING()
{
}
CND_NOSAMPLAYING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		if (!rhPtr.rhApp.soundPlayer.isSoundPlaying())
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_NOSPCHANNELPLAYING()
{
}
CND_NOSPCHANNELPLAYING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var channel = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		if (!rhPtr.rhApp.soundPlayer.isChannelPlaying(channel - 1))
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_NOSPSAMPLAYING()
{
}
CND_NOSPSAMPLAYING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
	    var p = this.evtParams[0];
	    var bPlaying = false;
	    var nSound = -1;
	    // PARAM_EXPSTRING?
	    if (p.code == 45) {
	        var name = rhPtr.get_EventExpressionString(p);
	        nSound = rhPtr.rhApp.soundBank.getSoundHandleFromName(name);
	    }
	    else {
	        nSound = p.sndHandle;
	    }
	    if ( nSound >= 0 )
	        bPlaying = rhPtr.rhApp.soundPlayer.isSamplePlaying(nSound);
	    if (!bPlaying)
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_SPCHANNELPAUSED()
{
}
CND_SPCHANNELPAUSED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var channel = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		if (rhPtr.rhApp.soundPlayer.isChannelPaused(channel - 1))
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT

function CND_SPSAMPAUSED()
{
}
CND_SPSAMPAUSED.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var p = this.evtParams[0];
		var bPaused = false;
		var nSound = -1;
	    // PARAM_EXPSTRING?
		if (p.code == 45) {
		    var name = rhPtr.get_EventExpressionString(p);
		    nSound = rhPtr.rhApp.soundBank.getSoundHandleFromName(name);
		}
		else {
		    nSound = p.sndHandle;
		}
		if (nSound >= 0)
		    bPaused = rhPtr.rhApp.soundPlayer.isSamplePaused(nSound);
		if (bPaused)
		{
			return CCnd.negaTRUE(this);
		}
		return CCnd.negaFALSE(this);
	}
}
// CUT


// Question and Answer object
// --------------------------------------------------------------
function CND_QEQUAL()
{
}
CND_QEQUAL.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		var num = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		if (rhPtr.rhEvtProg.rhCurParam0 == num)
			return true;
		return false;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_QEXACT()
{
}
CND_QEXACT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

function CND_QFALSE()
{
}
CND_QFALSE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return true;
	},
	eva2: function (rhPtr)
	{
		return false;
	}
}
// CUT

// Sub-Application object
// ------------------------------------------------------------
function CND_CCAAPPFINISHED()
{
}
CND_CCAAPPFINISHED.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.appFinished());
		}
	});
// CUT

function CND_CCAFRAMECHANGED()
{
}
CND_CCAFRAMECHANGED.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.frameChanged());
		}
	});
// CUT

function CND_CCAISPAUSED()
{
}
CND_CCAISPAUSED.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.isPaused());
		}
	});
// CUT

function CND_CCAISVISIBLE()
{
}
CND_CCAISVISIBLE.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.isVisible());
		}
	});
// CUT

// Counter object
// -------------------------------------------------------------
function CND_CCOUNTER()
{
}
CND_CCOUNTER.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		var value1, value2;
		while (pHo != null)
		{
			value1 = pHo.cpt_GetValue();
			value2 = rhPtr.get_EventExpressionAny(this.evtParams[0]);
			if (CRun.compareTo(value1, value2, this.evtParams[0].comparaison) == false)
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		}
		;
		return (cpt != 0);
	}
}
// CUT

// Active objects
// ----------------------------------------------------------------
function CND_CMPANGLE() {
}
CND_CMPANGLE.prototype = CServices.extend(new CCnd(),
    {
        eva1: function (rhPtr, hoPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        eva2: function (rhPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        evaExpRoutine: function (hoPtr, value, comp) {
            var angle = hoPtr.roc.rcAngle;
            var pMovement = hoPtr.hoAdRunHeader.GetMBase(hoPtr);
            if (pMovement) {
                angle = pMovement.getAngle();
                if (angle == CRunMBase.ANGLE_MAGIC)
                    angle = hoPtr.roc.rcAngle;
            }
            return CRun.compareTer(angle, value, comp);
        }
    });
// CUT

function CND_CMPSCALEX() {
}
CND_CMPSCALEX.prototype = CServices.extend(new CCnd(),
    {
        eva1: function (rhPtr, hoPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        eva2: function (rhPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        evaExpRoutine: function (hoPtr, value, comp) {
            return CRun.compareTer(hoPtr.roc.rcScaleX, value, comp);
        }
    });
// CUT

function CND_CMPSCALEY() {
}
CND_CMPSCALEY.prototype = CServices.extend(new CCnd(),
    {
        eva1: function (rhPtr, hoPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        eva2: function (rhPtr) {
            return this.evaExpObject(rhPtr, this);
        },
        evaExpRoutine: function (hoPtr, value, comp) {
            return CRun.compareTer(hoPtr.roc.rcScaleY, value, comp);
        }
    });
// CUT

// Active and extension objects
// ----------------------------------------------------------------
function CND_EXTHIDDEN()
{
}
CND_EXTHIDDEN.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			if ((hoPtr.ros.rsFlags & CRSpr.RSFLAG_HIDDEN) != 0)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTANIMENDOF()
{
}
CND_EXTANIMENDOF.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			var ani;
			if (this.evtParams[0].code == 10)
				ani = this.evtParams[0].value;
			else
				ani = rhPtr.get_EventExpressionInt(this.evtParams[0]);

			if (ani != rhPtr.rhEvtProg.rhCurParam0)
				return false;
			rhPtr.rhEvtProg.evt_AddCurrentObject(hoPtr);
			return true;
		},
		eva2:             function (rhPtr)
		{
			if (this.evtParams[0].code == 10)
				return this.evaObject(rhPtr, this);
			return this.evaExpObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var anim = this.evtParams[0].value;
			if (anim != hoPtr.roa.raAnimOn)
				return false;
			if (hoPtr.roa.raAnimNumberOfFrame == 0)
				return true;
			return false;
		},
		evaExpRoutine:    function (hoPtr, value, comp)
		{
			if (value != hoPtr.roa.raAnimOn)
				return false;
			if (hoPtr.roa.raAnimNumberOfFrame == 0)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTANIMPLAYING()
{
}
CND_EXTANIMPLAYING.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:             function (rhPtr)
		{
			if (this.evtParams[0].code == 10)
				return this.evaObject(rhPtr, this);
			return this.evaExpObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var anim = this.evtParams[0].value;
			if (anim != hoPtr.roa.raAnimOn)
				return CCnd.negaFALSE(this);
			if (hoPtr.roa.raAnimNumberOfFrame != 0)
				return CCnd.negaTRUE(this);
			return CCnd.negaFALSE(this);
		},
		evaExpRoutine:    function (hoPtr, value, comp)
		{
			if (value != hoPtr.roa.raAnimOn)
				return CCnd.negaFALSE(this);
			if (hoPtr.roa.raAnimNumberOfFrame != 0)
				return CCnd.negaTRUE(this);
			return CCnd.negaFALSE(this);
		}
	});
// CUT

function CND_EXTBOUNCING()
{
}
CND_EXTBOUNCING.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.rom.rmBouncing);
		}
	});
// CUT

function CND_EXTCMPACC()
{
}
CND_EXTCMPACC.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.rom.rmMovement.rmAcc, value, comp);
		}
	});
// CUT

function CND_EXTCMPDEC()
{
}
CND_EXTCMPDEC.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.rom.rmMovement.rmDec, value, comp);
		}
	});
// CUT

function CND_EXTCMPFRAME()
{
}
CND_EXTCMPFRAME.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.roa.raAnimFrame, value, comp);
		}
	});
// CUT

function CND_EXTCMPSPEED()
{
}
CND_EXTCMPSPEED.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.roc.rcSpeed, value, comp);
		}
	});
// CUT

function CND_EXTCMPVAR()
{
}
CND_EXTCMPVAR.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		if (pHo == null) return false;

		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		var value1;
		var value2;
		var p = this.evtParams[1];
		do
		{
			var num;
			if (this.evtParams[0].code == 53)
				num = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			else
				num = this.evtParams[0].value;

			if (num >= 0 && pHo.rov != null)
			{
				if (num < pHo.rov.rvValues.length)
					value1 = pHo.rov.getValue(num);
				else
					value1 = 0;
				value2 = rhPtr.get_EventExpressionAny(p);

				if (CRun.compareTo(value1, value2, p.comparaison) == false)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
			}
			else
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		} while (pHo != null);
		return (cpt != 0);
	}
}
// -- CUT

function CND_EXTCMPVARCONST() {
}
CND_EXTCMPVARCONST.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
        if (pHo == null) return false;

        var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
        var num = this.evtParams[0].value;
        var p = this.evtParams[1];
        var value1;
        var value2 = p.tokens[0].value;
        do {

            if (num >= 0 && pHo.rov != null)
            {
                if (num < pHo.rov.rvValues.length)
                    value1 = pHo.rov.getValue(num);
                else
                    value1 = 0;

                if (CRun.compareTo(value1, value2, p.comparaison) == false) {
                    cpt--;
                    rhPtr.rhEvtProg.evt_DeleteCurrentObject();
                }
            }
            else {
                cpt--;
                rhPtr.rhEvtProg.evt_DeleteCurrentObject();
            }
            pHo = rhPtr.rhEvtProg.evt_NextObject();
        } while (pHo != null);
        return (cpt != 0);
    }
}
// CUT

function CND_EXTCMPVARFIXED()
{
}
CND_EXTCMPVARFIXED.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			var fixed = (hoPtr.hoCreationId << 16) | ( (hoPtr.hoNumber) & 0xFFFF );
			return CRun.compareTer(fixed, value, comp);
		}
	});
// CUT

function CND_EXTCMPVARSTRING()
{
}
CND_EXTCMPVARSTRING.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		if (pHo == null) return false;

		var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		var value1;
		var value2;
		do
		{
			var num;
			if (this.evtParams[0].code == 62)
				num = rhPtr.get_EventExpressionInt(this.evtParams[0]);
			else
				num = this.evtParams[0].value;

			if (num >= 0 && pHo.rov != null && num < pHo.rov.rvStrings.length)
			{
				value1 = pHo.rov.getString(num);
				value2 = rhPtr.get_EventExpressionAny(this.evtParams[1]);

				if (CRun.compareTo(value1, value2, this.evtParams[1].comparaison) == false)
				{
					cpt--;
					rhPtr.rhEvtProg.evt_DeleteCurrentObject();
				}
			}
			else
			{
				cpt--;
				rhPtr.rhEvtProg.evt_DeleteCurrentObject();
			}
			pHo = rhPtr.rhEvtProg.evt_NextObject();
		} while (pHo != null);
		return (cpt != 0);
	}
}
// CUT

function CND_EXTCMPX()
{
}
CND_EXTCMPX.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.hoX, value, comp);
		}
	});
// CUT

function CND_EXTCMPY()
{
}
CND_EXTCMPY.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			return CRun.compareTer(hoPtr.hoY, value, comp);
		}
	});
// CUT

function CND_EXTCOLBACK()
{
}
CND_EXTCOLBACK.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			if (this.compute_NoRepeat(hoPtr))
			{
				rhPtr.rhEvtProg.evt_AddCurrentObject(hoPtr);
				return true;
			}

			var pEvg = rhPtr.rhEvtProg.rhEventGroup;
			if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_STOPINGROUP) == 0)
				return false;
			rhPtr.rhEvtProg.rh3DoStop = true;
			return true;
		},
		eva2:             function (rhPtr)
		{
			return CCnd.negate(this, this.evaObject(rhPtr, this));
		},
		evaObjectRoutine: function (hoPtr)
		{
			return hoPtr.hoAdRunHeader.colMask_TestObject_IXY(hoPtr, hoPtr.roc.rcImage, hoPtr.roc.rcAngle, hoPtr.roc.rcScaleX, hoPtr.roc.rcScaleY, hoPtr.hoX, hoPtr.hoY, 0, CColMask.CM_TEST_PLATFORM);
		}
	});
// CUT

function CND_EXTCOLLISION()
{
}
CND_EXTCOLLISION.prototype = CServices.extend(new CCnd(),
	{
		eva1:       function (rhPtr, pHo)
		{
			var pHo1 = rhPtr.rhObjectList[rhPtr.rhEvtProg.rh1stObjectNumber];
			if (pHo1 == null)
			{
				var toto = 2;
			}
			var oiEvent = this.evtOi;
			var p = this.evtParams[0];
			var oiParam = p.oi;

			while (true)
			{
				if (oiEvent == pHo.hoOi)
				{
					if (oiParam == pHo1.hoOi)
						break;
					if (oiParam >= 0)
						return false;
					if (this.colGetList(rhPtr, p.oiList, pHo1.hoOi))
						break;
					return false;
				}
				if (oiParam == pHo.hoOi)
				{
					if (oiEvent == pHo1.hoOi)
						break;
					if (oiEvent >= 0)
						return false;
					if (this.colGetList(rhPtr, this.evtOiList, pHo1.hoOi))
						break;
					return false;
				}
				if (oiEvent < 0)
				{
					if (oiParam < 0)
					{
						if (this.colGetList(rhPtr, this.evtOiList, pHo.hoOi))
						{
							if (this.colGetList(rhPtr, p.oiList, pHo1.hoOi))
								break;
							if (this.colGetList(rhPtr, p.oiList, pHo.hoOi) == false)
								return false;
							if (this.colGetList(rhPtr, this.evtOiList, pHo1.hoOi))
								break;
							return false;
						}
						else
						{
							if (this.colGetList(rhPtr, this.evtOiList, pHo1.hoOi))
								break;
							return false;
						}
					}
					else
					{
						if (oiParam == pHo1.hoOi)
							break;
						return false;
					}
				}
				if (oiParam >= 0)
					return false;
				if (oiEvent != pHo1.hoOi)
					return false;
				break;
			}

			var id = ( (pHo1.hoCreationId) << 16) | ((this.evtIdentifier) & 0x0000FFFF);
			if (CCnd.compute_NoRepeatCol(id, pHo) == false)
			{
				if ((rhPtr.rhEvtProg.rhEventGroup.evgFlags & CEventGroup.EVGFLAGS_STOPINGROUP) == 0)
					return false;
				rhPtr.rhEvtProg.rh3DoStop = true;
			}
			id = ( (pHo.hoCreationId) << 16) | ((this.evtIdentifier) & 0x0000FFFF);
			if (CCnd.compute_NoRepeatCol(id, pHo1) == false)
			{
				if ((rhPtr.rhEvtProg.rhEventGroup.evgFlags & CEventGroup.EVGFLAGS_STOPINGROUP) == 0)
					return false;
				rhPtr.rhEvtProg.rh3DoStop = true;
			}

			if (oiEvent < 0)
			    rhPtr.rhEvtProg.evt_DeleteCurrentQualifier(this.evtOiList);
			if (oiParam < 0)
			    rhPtr.rhEvtProg.evt_DeleteCurrentQualifier(p.oiList);
			rhPtr.rhEvtProg.evt_AddCurrentObject(pHo);
			rhPtr.rhEvtProg.evt_AddCurrentObject(pHo1);

			if (pHo1.rom.rmMovement.rmCollisionCount == rhPtr.rh3CollisionCount)
				pHo.rom.rmMovement.rmCollisionCount = rhPtr.rh3CollisionCount;
			else if (pHo.rom.rmMovement.rmCollisionCount == rhPtr.rh3CollisionCount)
				pHo1.rom.rmMovement.rmCollisionCount = rhPtr.rh3CollisionCount;

			return true;
		},
		eva2:       function (rhPtr)
		{
			return this.isColliding(rhPtr);
		},
		colGetList: function (rhPtr, oiList, lookFor)
		{
			if (oiList == -1)
				return false;
			var qoil = rhPtr.rhEvtProg.qualToOiList[oiList & 0x7FFF];
			var index;
			for (index = 0; index < qoil.qoiList.length; index += 2)
			{
				if (qoil.qoiList[index] == lookFor)
					return true;
			}
			return false;
		}
	});
// CUT

function CND_EXTENDPATH()
{
}
CND_EXTENDPATH.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return true;
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			if (hoPtr.roc.rcMovementType != CMoveDef.MVTYPE_TAPED)
				return false;
			return CCnd.checkMark(hoPtr.hoAdRunHeader, hoPtr.hoMark2);
		}
	});
// CUT

function CND_EXTFACING()
{
}
CND_EXTFACING.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.eva2(rhPtr);
		},
		eva2:             function (rhPtr)
		{
			if (this.evtParams[0].code == 29)
				return this.evaObject(rhPtr, this);
			return this.evaExpObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var mask = this.evtParams[0].value;
			var dir;
			for (dir = 0; dir < 32; dir++)
			{
				if (((1 << dir) & mask) != 0)
				{
					if (hoPtr.hoAdRunHeader.getDir(hoPtr) == dir)
					{
						return CCnd.negaTRUE(this);
					}
				}
			}
			return CCnd.negaFALSE(this);
		},
		evaExpRoutine:    function (hoPtr, value, comp)
		{
			value &= 31;
			return CCnd.negate(this, hoPtr.roc.rcDir == value);
		}
	});
// CUT

function CND_EXTFLAGRESET()
{
}
CND_EXTFLAGRESET.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			value &= 31;
			if (hoPtr.rov != null)
			{
				if ((hoPtr.rov.rvValueFlags & (1 << value)) != 0) return false;
			}
			return true;
		}
	});
// CUT

function CND_EXTFLAGSET()
{
}
CND_EXTFLAGSET.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
		    return this.eva2(rhPtr);
		},
		eva2:          function (rhPtr)
		{
		    var p = this.evtParams[0];
		    if (p.code != 68)       // PARAM_MULTIPLEVAR)
		        return this.evaExpObject(rhPtr, this);

		    // Parameter = mask and value of multiple flags
		    var pHo = rhPtr.rhEvtProg.evt_FirstObject(this.evtOiList);
		    var cpt = rhPtr.rhEvtProg.evtNSelectedObjects;
		    while (pHo != null) {
		        if (p.evaluateNoGlobal(pHo) == false) {
		            cpt--;
		            rhPtr.rhEvtProg.evt_DeleteCurrentObject();
		        }
		        pHo = rhPtr.rhEvtProg.evt_NextObject();
		    }
		    if (cpt != 0)
		        return true;
		    return false;
		},
		evaExpRoutine: function (hoPtr, value, comp)
		{
			value &= 31;
			if (hoPtr.rov != null)
			{
				if ((hoPtr.rov.rvValueFlags & (1 << value)) != 0)
				{
					return true;
				}
			}
			return false;
		}
	});
// CUT

function CND_EXTINPLAYFIELD()
{
}
CND_EXTINPLAYFIELD.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			var evpPtr = this.evtParams[0];
			if ((evpPtr.value & (rhPtr.rhEvtProg.rhCurParam0)) == 0)
				return false;

			if (this.compute_NoRepeat(hoPtr))
			{
				rhPtr.rhEvtProg.evt_AddCurrentObject(hoPtr);
				return true;
			}

			var pEvg = rhPtr.rhEvtProg.rhEventGroup;
			if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_STOPINGROUP) == 0)
				return false;
			rhPtr.rhEvtProg.rh3DoStop = true;
			return true;
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, (hoPtr.rom.rmEventFlags & CRMvt.EF_GOESOUTPLAYFIELD) != 0);
		}
	});
// CUT

function CND_EXTISBOLD()
{
}
CND_EXTISBOLD.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var info = CRun.getObjectFont(hoPtr);
			if (info.lfWeight >= 400)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTISCOLBACK()
{
}
CND_EXTISCOLBACK.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
            // Test at a specific position?
            var hox = hoPtr.hoX;
            var hoy = hoPtr.hoY;
            if (this.evtNParams >= 2) {
                hox = hoPtr.hoAdRunHeader.get_EventExpressionInt(this.evtParams[0]);
                hoy = hoPtr.hoAdRunHeader.get_EventExpressionInt(this.evtParams[1]);
            }

            if (hoPtr.hoAdRunHeader.colMask_TestObject_IXY(hoPtr, hoPtr.roc.rcImage, hoPtr.roc.rcAngle, hoPtr.roc.rcScaleX, hoPtr.roc.rcScaleY, hox, hoy, 0, CColMask.CM_TEST_OBSTACLE))
				return CCnd.negaTRUE(this);
            if (hoPtr.hoAdRunHeader.colMask_TestObject_IXY(hoPtr, hoPtr.roc.rcImage, hoPtr.roc.rcAngle, hoPtr.roc.rcScaleX, hoPtr.roc.rcScaleY, hox, hoy, 0, CColMask.CM_TEST_PLATFORM))
				return CCnd.negaTRUE(this);
			return CCnd.negaFALSE(this);
		}
	});
// CUT

function CND_EXTISCOLLIDING()
{
}
CND_EXTISCOLLIDING.prototype = CServices.extend(new CCnd(),
	{
		eva1: function (rhPtr, hoPtr)
		{
			return this.isColliding(rhPtr);
		},
		eva2: function (rhPtr)
		{
			return this.isColliding(rhPtr);
		}
	});
// CUT

function CND_EXTISIN()
{
}
CND_EXTISIN.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (pHo)
		{
			var x1 = pHo.hoX - pHo.hoImgXSpot;
			var x2 = x1 + pHo.hoImgWidth;
			var y1 = pHo.hoY - pHo.hoImgYSpot;
			var y2 = y1 + pHo.hoImgHeight;
			if (pHo.hoAdRunHeader.quadran_In(x1, y1, x2, y2) != 0)
				return CCnd.negaFALSE(this);
			return CCnd.negaTRUE(this);
		}
	});
// CUT

function CND_EXTISITALIC()
{
}
CND_EXTISITALIC.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var info = CRun.getObjectFont(hoPtr);
			if (info.lfItalic != 0)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTISOUT()
{
}
CND_EXTISOUT.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (pHo)
		{
			var x1 = pHo.hoX - pHo.hoImgXSpot;
			var x2 = x1 + pHo.hoImgWidth;
			var y1 = pHo.hoY - pHo.hoImgYSpot;
			var y2 = y1 + pHo.hoImgHeight;
			if (pHo.hoAdRunHeader.quadran_In(x1, y1, x2, y2) != 0)
				return CCnd.negaTRUE(this);
			return CCnd.negaFALSE(this);
		}
	});
// CUT

function CND_EXTISSTRIKEOUT()
{
}
CND_EXTISSTRIKEOUT.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			var info = CRun.getObjectFont(hoPtr);
			if (info.lfStrikeOut != 0)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTISUNDERLINE()
{
}
CND_EXTISUNDERLINE.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
		    var info = CRun.getObjectFont(hoPtr);
			if (info.lfUnderline != 0)
				return true;
			return false;
		}
	});
// CUT

function CND_EXTNEARBORDERS()
{
}
CND_EXTNEARBORDERS.prototype = CServices.extend(new CCnd(),
	{
		eva1:          function (rhPtr, hoPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		eva2:          function (rhPtr)
		{
			return this.evaExpObject(rhPtr, this);
		},
		evaExpRoutine: function (hoPtr, bord, comp)
		{
			var xw = hoPtr.hoAdRunHeader.rhWindowX + bord;
			var x = hoPtr.hoX - hoPtr.hoImgXSpot;
			if (x <= xw) return CCnd.negaTRUE(this);

			xw = hoPtr.hoAdRunHeader.rhWindowX + hoPtr.hoAdRunHeader.rh3WindowSx - bord;
			x += hoPtr.hoImgWidth;
			if (x >= xw) return CCnd.negaTRUE(this);

			var yw = hoPtr.hoAdRunHeader.rhWindowY + bord;
			var y = hoPtr.hoY - hoPtr.hoImgYSpot;
			if (y <= yw) return CCnd.negaTRUE(this);

			yw = hoPtr.hoAdRunHeader.rhWindowY + hoPtr.hoAdRunHeader.rh3WindowSy - bord;
			y += hoPtr.hoImgHeight;
			if (y >= yw) return CCnd.negaTRUE(this);

			return CCnd.negaFALSE(this);
		}
	});
// CUT

function CND_EXTNOMOREOBJECT()
{
}
CND_EXTNOMOREOBJECT.prototype =
{
	eva1:            function (rhPtr, hoPtr)
	{
		if (hoPtr == null)
			return this.eva2(rhPtr);
		if (this.evtOi >= 0)
		{
			if (hoPtr.hoOi != this.evtOi)
				return false;
			return true;
		}
		return this.evaNoMoreObject(rhPtr, 1);
	},
	eva2:            function (rhPtr)
	{
		return this.evaNoMoreObject(rhPtr, 0);
	},
	evaNoMoreObject: function (rhPtr, sub)
	{
		var oil = this.evtOiList;

		var poil;
		if ((oil & 0x8000) == 0)
		{
			poil = rhPtr.rhOiList[oil];
			if (poil.oilNObjects == 0)
				return true;
			return false;
		}

		if ((oil & 0x7FFF) == 0x7FFF)
			return false;
		var pqoi = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
		var count = 0;
		var qoi;
		for (qoi = 0; qoi < pqoi.qoiList.length; qoi += 2)
		{
			poil = rhPtr.rhOiList[pqoi.qoiList[qoi + 1]];
			count += poil.oilNObjects;
		}
		count -= sub;
		if (count == 0)
			return true;
		return false;
	}
}
// CUT

function CND_EXTNOMOREZONE()
{
}
CND_EXTNOMOREZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var count = rhPtr.rhEvtProg.count_ZoneOneObject(this.evtOiList, this.evtParams[0]);
		return count == 0;
	}
}
// CUT

function CND_EXTNUMBERZONE()
{
}
CND_EXTNUMBERZONE.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var count = rhPtr.rhEvtProg.count_ZoneOneObject(this.evtOiList, this.evtParams[0]);
		var number = rhPtr.get_EventExpressionInt(this.evtParams[1]);
		return CRun.compareTer(count, number, this.evtParams[1].comparaison);
	}
}
// CUT

function CND_EXTNUMOFOBJECT()
{
}
CND_EXTNUMOFOBJECT.prototype =
{
	eva1: function (rhPtr, hoPtr)
	{
		return this.eva2(rhPtr);
	},
	eva2: function (rhPtr)
	{
		var count = 0;
		var poil;
		var oil = this.evtOiList;
		if ((oil & 0x8000) == 0)
		{
			poil = rhPtr.rhOiList[oil];
			count = poil.oilNObjects;
		}
		else
		{
			if ((oil & 0x7FFF) != 0x7FFF)
			{
				var pqoi = rhPtr.rhEvtProg.qualToOiList[oil & 0x7FFF];
				var qoi;
				for (qoi = 0; qoi < pqoi.qoiList.length; qoi += 2)
				{
					poil = rhPtr.rhOiList[pqoi.qoiList[qoi + 1]];
					count += poil.oilNObjects;
				}
			}
		}
		var value = rhPtr.get_EventExpressionInt(this.evtParams[0]);
		return CRun.compareTer(count, value, this.evtParams[0].comparaison);
	}
}
// CUT

function CND_EXTOUTPLAYFIELD()
{
}
CND_EXTOUTPLAYFIELD.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			var evpPtr = this.evtParams[0];
			if ((evpPtr.value & (rhPtr.rhEvtProg.rhCurParam0)) == 0)
				return false;
			//        if (rhPtr.rhEvtProg.curParam1 == 0x12345678)
			//            return true;

			if (this.compute_NoRepeat(hoPtr))
			{
				rhPtr.rhEvtProg.evt_AddCurrentObject(hoPtr);
				return true;
			}

			var pEvg = rhPtr.rhEvtProg.rhEventGroup;
			if ((pEvg.evgFlags & CEventGroup.EVGFLAGS_STOPINGROUP) == 0)
				return false;
			rhPtr.rhEvtProg.rh3DoStop = true;
			return true;
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, (hoPtr.rom.rmEventFlags & CRMvt.EF_GOESOUTPLAYFIELD) != 0);
		}
	});
// CUT

function CND_EXTPATHNODE()
{
}
CND_EXTPATHNODE.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return true;
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			if (hoPtr.roc.rcMovementType != CMoveDef.MVTYPE_TAPED)
				return false;
			return CCnd.checkMark(hoPtr.hoAdRunHeader, hoPtr.hoMark1);
		}
	});
// CUT

function CND_EXTPATHNODENAME()
{
}
CND_EXTPATHNODENAME.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			var pName = rhPtr.get_EventExpressionString(this.evtParams[0]);
			if (hoPtr.hoMT_NodeName != null)
			{
				if (hoPtr.hoMT_NodeName == pName)
				{
					return true;
				}
			}
			return false;
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			if (hoPtr.roc.rcMovementType != CMoveDef.MVTYPE_TAPED)
				return false;
			if (CCnd.checkMark(hoPtr.hoAdRunHeader, hoPtr.hoMark1))
			{
				var pName = hoPtr.hoAdRunHeader.get_EventExpressionString(this.evtParams[0]);
				if (hoPtr.hoMT_NodeName != null)
				{
					if (hoPtr.hoMT_NodeName == pName)
					{
						return true;
					}
				}
			}
			return false;
		}
	});
// CUT

function CND_EXTREVERSED()
{
}
CND_EXTREVERSED.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.rom.rmReverse == 0);
		}
	});
// CUT

function CND_EXTSHOWN()
{
}
CND_EXTSHOWN.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, (hoPtr.ros.rsFlags & CRSpr.RSFLAG_HIDDEN) == 0);
		}
	});
// CUT

function CND_EXTSTOPPED()
{
}
CND_EXTSTOPPED.prototype = CServices.extend(new CCnd(),
	{
		eva1:             function (rhPtr, hoPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		eva2:             function (rhPtr)
		{
			return this.evaObject(rhPtr, this);
		},
		evaObjectRoutine: function (hoPtr)
		{
			return CCnd.negate(this, hoPtr.roc.rcSpeed == 0);
		}
	});
// CUT

function CND_RUNNINGAS() {
}
CND_RUNNINGAS.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var number;
        if (this.evtParams[0].code == 67)   // PARAM_RUNTIME
            number = this.evtParams[0].value;
        else
            number = rhPtr.get_EventExpressionInt(this.evtParams[0]);
        if (number == 5)		// RUNTIME_HTML5
            return CCnd.negaTRUE(this);
        return CCnd.negaFALSE(this);
    }
}
// CUT

function CND_STARTCHILDEVENT() {
}
CND_STARTCHILDEVENT.prototype =
{
    eva1: function (rhPtr, hoPtr) {
        return this.eva2(rhPtr);
    },
    eva2: function (rhPtr) {
        var childEventParam = this.evtParams[0];    // PARAM_CHILDEVENT

        // Restore object selection
        if (childEventParam.ois.length != 0 && rhPtr.rhEvtProg.childEventSelectionStack.length != 0)
        {
            var selectedObjects = rhPtr.rhEvtProg.childEventSelectionStack[rhPtr.rhEvtProg.childEventSelectionStack.length - 1];
            rhPtr.rhEvtProg.evt_RestoreSelectedObjects(childEventParam.ois, selectedObjects);
        }
        return CCnd.negaTRUE(this);
    }
}
// CUT









































