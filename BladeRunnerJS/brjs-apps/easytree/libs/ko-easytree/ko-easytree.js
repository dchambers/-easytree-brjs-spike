ko.bindingHandlers.easyTree = {
  init: function(element, valueAccessor, allBindings, data, context){
    var easytree = $(element).easytree({data: ko.unwrap(valueAccessor())})
    context.easytree = easytree

    console.log("easytree:" + JSON.stringify(context.easytree))
  }
}