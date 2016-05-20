// (function () {
//     console.log('in script tag');
//     document.getElementById('inpt1').value = 10;
//
//     function hi (){
//         console.log('hi');
//     }
// }());


var num1;
var num2;

var SeunLib = {
     compute: function(){

     }
};

var App = {

    compute: function (e) {  //grad fist input
        if (e.target.id == 'inpt1') {
            num1 = e.target.value;
        }
        if (e.target.id == 'inpt2') {
            num2 = e.target.value;
        }
        function isNumeric(val) {
            return !isNaN(parseInt(val));
        }

        if (isNumeric(num1) && isNumeric(num2)) {
            var op = document.getElementById('selOpt');
            var result;
            switch (op.value) {
                case '+':
                    result = parseInt(num1) + parseInt(num2);
                    break;
                case '*':
                    result = parseInt(num1) * parseInt(num2);
            }
            document.getElementById('ans').value = result;
        }
        // var elem1 = document.getElementById('inpt1');
        // var elem2 = document.getElementById('inpt2');
        // var op = document.getElementById('selOpt');
        // var result;
        // switch (op.value) {
        //     case '+':
        //         result = parseInt(elem1.value) + parseInt(elem2.value);
        //         break;
        //     case '*':
        //         result =  parseInt(elem1.value) * parseInt(elem2.value);
        // }
        // document.getElementById('ans').value = result;

    }
};

