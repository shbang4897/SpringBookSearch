var base64 ;
var myid=null;
var isAble = null;


function searchBook(a,b) {

    var keyword= null;

    if(b==null){keyword= $("#keyword").val();}
    else if (b!=null){
        keyword=b;
    }
    if (event.keyCode == 13 || a== true) {
        console.log("in Search")
        $.ajax(
            {
                url : "http://localhost:8080/book/bookList",
                type : "GET",
                dataType : "jsonp",
                jsonp : "callback",

                data : {
                    keyword :keyword
                },
                success : function(result) {
                    console.log(result);
                    $("tbody").empty();
                    var priceTd = null;
                    var titleTd = null;
                    var authorTd = null;
                    var img = null;
                    var imgTd = null;

                    var div = null;

                    for (var loop = 0; loop < result.length; loop++) {

                        var tr = $("<tr></tr>").attr("data-isbn",result[loop].isbn);
                        priceTd = $("<td></td>").text(result[loop].price);
                        div = $("<div></div>").attr("id","detaildiv"+result[loop].isbn);
                        titleTd = $("<td></td>").text(result[loop].title).attr("id","titleD").append(div);

                        authorTd = $("<td></td>").text(result[loop].author);
                        img = $("<img />").attr("src",result[loop].img).attr("width","150");
                        imgTd = $("<td></td>").append(img);
                        isAble = result[loop].lentperson;
                        tr.append(imgTd);
                        tr.append(titleTd);
                        tr.append(authorTd);
                        tr.append(priceTd);


                        $("tbody").append(tr);
                    }
                   },
                error : function () {
                    alert("Program Error");
                }

            });
    }


}

$(document).on('click', '#remove', function() {
    $(this).parent().parent().remove();
});
