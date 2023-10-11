sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
    "use strict";
    return {
        filterEnrollments: function(sValue) {
            switch (sValue) {
                // case "2713c83b-f171-482a-a82c-416e83b7dfdc":
                //         return new Filter({ path: "enrollments/class_ID", operator: FilterOperator.EQ, value1: sValue });
                case "1":
                        return new Filter({ path: "enrollments", operator: FilterOperator.GT, value1: 1 });
                case "2":
                        return new Filter({
                        filters: [
                            new Filter({ path: "enrollments", operator: FilterOperator.GT, value1: 2 })
                        ],
                        and: true
                    });
                case "3":
                        return new Filter({ path: "enrollments", operator: FilterOperator.GT, value1: 3 });
            }
        }
    };
});
