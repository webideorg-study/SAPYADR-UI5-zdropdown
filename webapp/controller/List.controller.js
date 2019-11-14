sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("zdropdown.controller.List", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.view.V_PODetail
		 */
		// onInit: function() {
		// 	var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/iwbep/GWSAMPLE_BASIC/", true);
		// 	this.getView().byId("select").setModel(oModel);
		// },

		/**
		 *@memberOf zdropdown.controller.List
		 */
		GetSelectItem: function(oEvent) {
			console.log(this.getView().byId("select").getSelectedKey());

			//console.log(this.getView().byId("select").getBinding("items"));

			//console.log(oEvent.getParameters("selectedItem"));
			var selectedItem = oEvent.getParameter("selectedItem");
			console.log(selectedItem.getBindingContext().getProperty("ProductID"));
			console.log(selectedItem.getKey());

			// var selectedItem = oEvent.getSource().getSelectedItem();
			// var context = selectedItem.getBindingContext();
			// console.log(context.getProperty("ProductID"));

		}

	});
});