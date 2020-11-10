console.log('js');

$(document).ready(function(){

// ==========================================================
// Declaration of an array of objects
// ==========================================================

var shoes = [
  {
    id : 100,
    type : 'Womens',
    name : 'Air Force 1 Sage Low',
    color : 'white, black, pink',
    price : '$200',
    size : 'US 5-12',
    photo : 'air_force.jpg',
    tagWords : ['air', 'force', 'sage', 'low', 'womens']
  },
  {
    id : 101,
    type : 'Unisex',
    name : 'Blazer Mid 77',
    color : 'orange, white, black, pink, green',
    price : '$170',
    size : 'US 5-12',
    photo : 'blazer_mid.jpg',
    tagWords : ['blazer', 'mid', '77', 'unisex']
  },
  {
    id : 102,
    type : 'Womens',
    name : 'Air Max 90',
    color : 'white, black',
    price : '$200',
    size : 'US 5-12',
    photo : 'air_max.jpg',
    tagWords : ['air', 'max', '90', 'womens']
  },
  {
    id : 103,
    type : 'Unisex',
    name : 'Air Jordan 1',
    color : 'white, black',
    price : '$190',
    size : 'US 7-18',
    photo : 'air_jordan.jpg',
    tagWords : ['air', 'jordan', '1', 'unisex']
  },
  {
    id : 104,
    type : 'Mens',
    name : 'Air Jordan 1 Low Premium',
    color : 'white',
    price : '$220',
    size : 'US 7-18',
    photo : 'air_jordan_1.jpg',
    tagWords : ['air', 'jordan', '1', 'mens','low','premium']
  },
  {
    id : 105,
    type : 'Womens',
    name : 'Court Royale 2 Mid',
    color : 'white, black',
    price : '$120',
    size : 'US 5-12',
    photo : 'court_royale.jpg',
    tagWords : ['court', 'royale', '2', 'mid','womens']
  }
];// end of object array list

// ==========================================================
// Function call to display all items
// ==========================================================

allShoes(); //displays all items on home page

$('#resetBtn').click(function(){
  console.log('reset');
  allShoes();
});

// ==========================================================
// display items as per users input - type filter call
// ==========================================================

$('#submitBtn').click(function(){
  var inputArray = [];

  //read input of users and store
  var mens = $('#mens:checked').val();
  var womens = $('#womens:checked').val();
  var unisex = $('#unisex:checked').val();
  console.log(mens, womens, unisex);
  //push users input into an array

  if(mens === 'checked') {
    inputArray.push('Mens');
    console.log(inputArray);
  }

  if(womens === 'checked') {
    inputArray.push('Womens');
    console.log(inputArray);
  }

  if(unisex === 'checked') {
    inputArray.push('Unisex');
    console.log(inputArray);
  }

  //call the function to filers user's choice
  filteredShoes(inputArray);

}); // end of submitBtn function

// ==========================================================
// Filter by Gender type
// ==========================================================

function filteredShoes(shoeType){
  console.log(shoeType);
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < shoes.length; i++) {
    for (j = 0 ; j < shoeType.length; j++){
      if (shoeType[j] === shoes[i].type) {

        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filteredShoes

// ==========================================================
// Search by word
// ==========================================================

$('#searchWord').click(function(){
  $(this).val('');
  // console.log(this);
}); // end of click function

$('#searchBtn').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  var searchWord = $('#searchWord').val();
  console.log(searchWord);
  // debugger;
  filterByWord(searchWord);
}); //end of click function


// ==========================================================
// Sort by Selection
// ==========================================================

$('#sortBtn').change(function(){
  $('input[type=checkbox]').prop('checked',false);
  var sortType = ($('#sortBtn').val()).toLowerCase();
  console.log(sortType);

  if((sortType === 'name')){
    sortByAscending(sortType); // calling function.
  }

}); // end of sortbtn.change()

function sortByAscending(dummySortType){
  console.log(dummySortType);
  shoes.sort(function(a,b){

  //compare 2 consective objects' name property

  switch (dummySortType){

    case 'name' :
    console.log('name');
    var itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
    break;

    default :
    console.log('not matching');
  }// end of switch

  if (itemA < itemB){
    return -1; // false
  }

  if (itemA > itemB){
    return 1; // true
  }

  }); // end of shoes.sort()

  allShoes();

} // end of sortByAscending

// ==========================================================
// Filter by word
// ==========================================================

function filterByWord(word){
  console.log(word);
  // debugger;
  var i,j;
  $('#result').text('');
  for (i = 0 ; i < shoes.length; i++){
    for (j = 0; j < shoes[i].tagWords.length; j++){
      console.log(word.toLowerCase(), shoes[i].tagWords[j]);
      if (word.toLowerCase() === shoes[i].tagWords[j]) {
        // debugger;
        displayCards(i);
        // debugger;
        cardModal();
      } //if
    } // for j
  } // for i
} // end of filterByWord function

// ==========================================================
// Function to display all items
// ==========================================================

function allShoes(){
  var i = 0;
  console.log('allShoes');
  $('#result').text(' ');
  for (i = 0 ; i < shoes.length; i++){
    displayCards(i);
    cardModal();
  } //end of for loop
  } //end of allCats function


// ==========================================================
// Modal
// ==========================================================

function cardModal(){
 // modal
  $('.moreDetails').click(function(){
  $('#imageShoes').text(' '); //clearing the content
  console.log(this.id);

  var i=0;
  for (i = 0; i < shoes.length; i++) {

    if (parseInt(this.id) === shoes[i].id) {
      console.log(shoes[i].id, shoes[i].name, shoes[i].price);
        $('#exampleModalLabel').text(shoes[i].name);
        //append will keep  adding to existing content, so clear if you want
        //or else use html to replace existing content
        $('#imageShoes').append('<img class="img-fluid text-secondary" src="images/' + shoes[i].photo + '" alt=""/>');
        $('.modalContent').append('<div class="text-secondary display-4 p-2"' + shoes[i].type + '<br>' + shoes[i].color + '<br>' + shoes[i].price + '<br>' + shoes[i].size);
    } //end of if statement
  }//end of for statement

}); // end of moreDetails click event

} // end of cardModal


// ==========================================================
//  Card
// ==========================================================

function displayCards(j){
console.log(j);
// var i = 0;
// for (i = 0 ; i < shoes.length; i++){
  $('#result').append( '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 m-auto">' +
                            '<div class="card border-primary mb-3 text-secondary" >' +
                               '<img src="images/' + shoes[j].photo + '" class="card-img-top" alt="' + shoes[j].type + '">' +
                               '<div class="card-body bg-primary ">' +
                                '<h2 class="card-title">'+ shoes[j].name + '</h2>' +
                                '<h5 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[j].type + '</span> <br></h5>' +
                                 '<h5 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[j].color + '</span> <br></h5>' +
                                 '<h4 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[j].price + '</span> <br></h4>' +

                                '<button id="' + shoes[j].id + '" type="button" class="btn btn-warning moreDetails" data-toggle="modal" data-target="#exampleModal">More Shoes'+ " " + '</button>' +
                              '</div>' +
                            '</div>' +
                        '</div>'
                    ); //append ends here

  // } //end of for loop
}//end of function


}); // End of document.ready()
