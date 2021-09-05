$(function () {
    $('#example2').DataTable({
      dom: 'rBlfitlip',
      buttons: [{
              extend: 'csv',
              text: '<i class="fa fa-file-text-o" aria-hidden="true">Export (CSV)</i>',
              title: 'List'
          }
      ],
      aLengthMenu: [
          [50, 100, 200, 500, -1],
          [50, 100, 200, 500, "All"]
      ],
      pageLength: 50,
    })
  })

  