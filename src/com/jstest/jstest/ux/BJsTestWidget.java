package com.jstest.jstest.ux;

import com.tridium.web.BICollectionSupport;

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.NiagaraSingleton;
import javax.baja.nre.annotations.NiagaraType;
import javax.baja.sys.BSingleton;
import javax.baja.sys.Context;
import javax.baja.sys.Sys;
import javax.baja.sys.Type;
import javax.baja.web.BIFormFactorMax;
import javax.baja.web.js.BIJavaScript;
import javax.baja.web.js.JsInfo;

@NiagaraType
@NiagaraSingleton
public class BJsTestWidget  extends BSingleton implements BIJavaScript, BIFormFactorMax, BICollectionSupport
{
//region /*+ ------------ BEGIN BAJA AUTO GENERATED CODE ------------ +*/
//@formatter:off
/*@ $com.jstest.jstest.ux.BJsTestWidget(2747097003)1.0$ @*/
/* Generated Mon Aug 19 22:46:02 CEST 2024 by Slot-o-Matic (c) Tridium, Inc. 2012-2024 */

  public static final BJsTestWidget INSTANCE = new BJsTestWidget();

  //region Type

  @Override
  public Type getType() { return TYPE; }
  public static final Type TYPE = Sys.loadType(BJsTestWidget.class);

  //endregion Type

//@formatter:on
//endregion /*+ ------------ END BAJA AUTO GENERATED CODE -------------- +*/



    private BJsTestWidget() {}
    public JsInfo getJsInfo(Context cx) { return jsInfo; }

    private static final JsInfo jsInfo =
            JsInfo.make(BOrd.make("module://jsTest/rc/JsTestWidget.js"));

}
