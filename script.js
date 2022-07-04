
var inputValue;
var arr = [];
var emptyString = '';
function num_1(number) {
    inputValue = document.getElementById('show');
    inputValue.value += number;
    emptyString += number;
    console.log(arr);
}
var addOperator;
function calculate(operator) {
    inputValue.value += operator;
    if (emptyString != '') {
        arr.push(emptyString);
    }
    emptyString = '';
    //addOperator = operator;
    arr.push(operator);
}

function equal() {
    arr.push(emptyString);
    var arr_2 = [];
    var store_data;
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '+':
                if (arr_2.length == 0) {
                    store_data = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
                    arr_2.push(store_data);
                }
                else {
                    store_data = arr_2[0] + parseFloat(arr[i + 1]);
                    console.log(store_data);
                    arr_2 = [];
                    arr_2.push(store_data);
                }
                break;

            case '-':
                if (arr_2.length == 0) {
                    store_data = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
                    arr_2.push(store_data);
                }
                else {
                    store_data = arr_2[0] - parseFloat(arr[i + 1]);
                    arr_2 = [];
                    arr_2.push(store_data);
                }
                break;

            case '*':

                if (arr_2.length == 0) {
                    store_data = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
                    arr_2.push(store_data);
                }
                
                
                else {
                    store_data = arr_2[0] * parseFloat(arr[i + 1]);
                    arr_2 = [];
                    arr_2.push(store_data);
                }
                break;

            case '/':
                if (arr_2.length == 0) {
                    store_data = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
                    arr_2.push(store_data);
                }
                else {
                    store_data = arr_2[0] / parseFloat(arr[i + 1]);
                    arr_2 = [];
                    arr_2.push(store_data);
                }
                break;

        }
    }
    inputValue.value = store_data;
    emptyString = store_data.toString();
    arr = [];
    arr_2 = [];
}
