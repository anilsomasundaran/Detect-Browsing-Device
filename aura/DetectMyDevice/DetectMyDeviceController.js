({
    browse : function(component, event, helper) {
        //$A - global aura namespace, get method returns the value referenced
        var device = $A.get("$Browser.formFactor");
        alert("You are using a " + device);
    }
})