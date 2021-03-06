$(document).ready(function() {
    $input = $("[data-behavior='autocomplete']")
  
    var options = {
      getValue: "title",
      url: function(phrase) {
        return "/search.json?q=" + phrase;
      },
      categories: [
        {
          listLocation: "tutorials",
        }
      ],
      list: {
        onChooseEvent: function() {
          var url = $input.getSelectedItemData().url
          $input.val("")
          // Turbolinks.visit(url)
          window.location = url
        }
      }
    }

    $input.easyAutocomplete(options)
  });