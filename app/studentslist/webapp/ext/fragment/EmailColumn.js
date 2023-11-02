sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: async function(oEvent) {
            // const oData = oEvent.getSource().getBindingContext('undefined').getObject();
            const sPath = oEvent.getSource().getBindingContext().getPath();
               
            this.emailInfo = await this.loadFragment({ name: "studentslist.ext.fragment.EmailInfo" });
            this.emailInfo.bindElement({ path: sPath });

            this._view.addDependent(this.emailInfo);
            this.emailInfo.open();
            
           
        },

        onCloseDialog: function(oEvent){
            const oDialog = oEvent.getSource().getParent();
            oDialog.close();
            oDialog.destroy();
        }
    };
});
