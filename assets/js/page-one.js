$(document).ready(function() {
  loadJSONPlaceholderAPI();
  sortByAlphabet();
  groupPostByUserID();
});

function loadJSONPlaceholderAPI() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  var userID = $("#user-id").val();
  var list = "";
  $.ajax({
    url: url,
    type: "GET",
    success: function(result) {
      if (!userID) {
        if (result.length) {
          $.each(result, function(key, value) {
            list += "<tr>";
            list += "<td>" + value.id + "</td>";
            list += "<td>" + value.userId + "</td>";
            list += "<td>" + value.title + "</td>";
            list += "<td>" + value.body + "</td>";
            list += "</tr>";
          });

          $("#table-request-list").append(list);
        }
      } else {
        if (result.length) {
          $.each(result, function(key, value) {
            if (JSON.stringify(value.userId) === userID) {
              list += "<tr>";
              list += "<td>" + value.id + "</td>";
              list += "<td>" + value.userId + "</td>";
              list += "<td>" + value.title + "</td>";
              list += "<td>" + value.body + "</td>";
              list += "</tr>";
            }
          });
          $("#table-request-list").find("tbody tr").remove();
          $("#table-request-list").append(list);
        }
      }
    }
  });
}

function sortByAlphabet() {
  var switching,
    i,
    shouldSwitch,
    x,
    y,
    dir,
    rows,
    table,
    switchcount = 0,
    icon = $("#table-request-list").find("span.sort-asc i");

  table = document.getElementById("table-request-list");
  rows = table.rows;
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];

      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          icon.removeClass("fa-sort-down").addClass("fa-sort-up");
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          icon.removeClass("fa-sort-up").addClass("fa-sort-down");
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function groupPostByUserID() {
  $("#btn-user-search").on("click", function() {
    loadJSONPlaceholderAPI();
  });
}
