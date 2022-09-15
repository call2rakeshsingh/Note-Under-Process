/*********************************************    NavBar Variables    ***************************************/
const navbarParent = document.getElementById("navbarParent");                   //It is a parent of all navbar items.
const addNewNotes = document.getElementById("addNewNotes");                    //#checkbox id Plus/ Minus Sign on Navbar.
const addNewNotesClass = document.getElementsByClassName("addNewNotesClass"); //.label class. To change img when checkbox toggle. 
const searchText = document.getElementById("searchText");                    //search box textarea to write for search in notes.
const inTitleSearch = document.getElementById("inTitleSearch");             //Inside advance search button it is a radio button it will search in only title.
const inNotesSearch = document.getElementById("inNotesSearch");            //Inside advance search button it is a radio button.
const inDateSearch = document.getElementById("inDateSearch");             //Inside advance search button it is a radio button.
const inAllNotes = document.getElementById("inAllNotes");                //Inside advance search button it is a radio button.


/*********************************************    Welcome Tag Variables    ***************************************/
const welcomeTag = document.getElementById("welcomeTag");            //It welcomes when you are using this app below navbar.


/*********************************************    Welcome Tag Variables    ***************************************/
const imptortantNotesPageID = document.getElementById("imptortantNotesPageID");                //#checkbox id When we click for toggle between important/ all notes page.
const imptortantNotesPageClass = document.getElementsByClassName("imptortantNotesPageClass"); //.label class. To change img when checkbox toggle. 


/*****************************    Text Area and Submit/ Discard Buttons Variables    *****************************/
const importantTick = document.getElementById("importantTick").innerText;                //it has a default "0" value for importan object.
const container = document.getElementById("container");                                 //Parent of all title notes submit and discard button.
const titleText = document.getElementById("titleText");                                //Write Note Title
const notesText = document.getElementById("notesText");                               //Write Note Content
const submitButton = document.getElementById("submitButton");                        //Submit button to save your notes.
const discardButton = document.getElementById("discardButton");                     //Discard button to discard your notes.
const submitButtonAfterEdit = document.getElementById("submitButtonAfterEdit");    //Submit button for edit notes
const discardButtonAfterEdit = document.getElementById("discardButtonAfterEdit"); //Discard button for edit notes
const notesIdAtEdit = document.getElementById("notesIdAtEdit");                  //It holds the id of active edit note.


/*****************************    Saved Notes Welcome Area Variables    *****************************/

const savedNotesWelcomeAreaBarParent = document.getElementById("savedNotesWelcomeAreaBarParent");  //We use it for hide this bar while searching.
const savedNotesWelcomeAreaBar = document.getElementById("savedNotesWelcomeAreaBar");
const savedNotesWelcomeAreaBarText = document.getElementById("savedNotesWelcomeAreaBarText");
const deleteAllNotess = document.getElementById("deleteAllNotess");                             //It deletes all the notes by clearing localstorage.


/*****************************    Saved Notes Container Variables    *****************************/
const notesMainContainer = document.getElementById("notesMainContainer");              //A div where all the notes boxes will be created.
const titleContainer = document.getElementsByClassName("titleContainer");             //It is a class of all created notes title.
const notesContainer = document.getElementsByClassName("notesContainer");            //It is a class of all created notes note content.
const importantClass = document.getElementsByClassName("importantClass");           //It is a class of all created notes important/unimportant.
const toolDivInAllNotes = document.getElementsByClassName("toolDivInAllNotes");    //In every notes bottom time edit and important feature.
const timeClassSpan = document.getElementsByClassName("timeClassSpan");           //It is a class of all created notes time.


/*****************************    Suggestion Area and Developer Name Variables    *****************************/
const suggetionParaDiv = document.getElementById("suggetionParaDiv");         //It is a parent of suggestion para.
const suggetionPara = document.getElementById("suggetionPara");              //When you open and there in no notes in that section then it suggest you to write.
const developerNameDiv = document.getElementById("developerNameDiv");       //You can see all the time developer name in bottom.




/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     addEventListener     **********************************************/
/******************************************************************************************************************/

//When we reload page or open this page it will call all the previous notes added in local storage.


//When we reload page or open this page it will check if there is no notes then by default writing area will be active
addEventListener('load',showNotes);
//addEventListener('load', hideDeveloperName);



/******************************************************************************************************************/
/******************************************************************************************************************/
/************************************************     Small Functions For improve user experience    **********************************************/
/******************************************************************************************************************/


/************************************************     Auto Grow     **********************************************/
/******************************************************************************************************************/

function autoGrow(element) {
  element.style.height = "5rem";
  element.style.height = (element.scrollHeight) + "px";
}


/************************************************     Clear Search Box     **********************************************/
/******************************************************************************************************************/

function clearSearchBoxFunc() {
  searchText.value = "";
  searchTextFunc();
  // console.log(searchText.value == 0)
}


/************************************************     Hide After Submit     **********************************************/
/******************************************************************************************************************/


function hideAfterSubmit() {
  titleText.style.display = "none";
  notesText.style.display = "none";
  submitButton.style.display = "none";
  discardButton.style.display = "none";
  savedNotesWelcomeAreaBarParent.style.marginTop = "-1.5rem";
  addNewNotesClass[0].innerHTML = `<img src="new-notes.png" alt="" srcset=""></img>`;
  addNewNotesClass[0].style.display = "flex";
  notesMainContainer.style.display = "grid";
  savedNotesWelcomeAreaBarParent.style.display = "block";
  //hideDeveloperName();


}


/************************************************     Show After Add Notes     **********************************************/
/******************************************************************************************************************/


function showAfterAddNewNotes() {
  titleText.style.display = "block";
  notesText.style.display = "block";
  submitButton.style.display = "block";
  discardButton.style.display = "block";
  savedNotesWelcomeAreaBarParent.style.marginTop = "3rem";
  addNewNotesClass[0].innerHTML = `<img src="hide-new-notes.png" alt="" srcset=""></img>`;
  addNewNotesClass[0].style.display = "flex";
  notesMainContainer.style.display = "none";
  savedNotesWelcomeAreaBarParent.style.display = "none";


  titleText.focus();
  //hideDeveloperName();
  
}


/************************************************     Hide and Show Text Area     **********************************************/
/******************************************************************************************************************/

function hideAndShowTextArea() {
  let notes = localStorage.getItem("notesDataWithEditFeature");
  if (addNewNotes.checked == true && addNewNotes.disabled != true) {
    hideAfterSubmit()
  }
  console.log(notes)
  if (addNewNotes.checked == false && addNewNotes.disabled != true && (notes == null) && imptortantNotesPageID.checked == false) {
    showAfterAddNewNotes();
    savedNotesWelcomeAreaBarParent.style.display = "block";
    notesMainContainer.style.display = "grid";
    window.scrollTo(0, 0);
    
  }

  else if (addNewNotes.checked == false && addNewNotes.disabled != true && imptortantNotesPageID.checked == false) {
    showAfterAddNewNotes();
    window.scrollTo(0, 0);
  }


  if (addNewNotes.checked == false && addNewNotes.disabled != true && imptortantNotesPageID.checked == true) {

    if (importantFor.length != 0) {
      for (let index = 0; index < importantFor.length; index++) {
        const element = importantFor[index];
        if (element == 1) {
          showAfterAddNewNotes();
          window.scrollTo(0, 0);

          break;
        }
        else {
          showAfterAddNewNotes();
          savedNotesWelcomeAreaBarParent.style.display = "block";
          notesMainContainer.style.display = "grid";
          window.scrollTo(0, 0);
          

        }
      }
    }

    else{
      showAfterAddNewNotes();
      savedNotesWelcomeAreaBarParent.style.display = "block";
      notesMainContainer.style.display = "grid";
      window.scrollTo(0, 0);

    }
  }




  if (addNewNotes.disabled == true) {
    alert("Please Discard or Save your changes !!!")
  }
}

/************************************************     Hide Developer Name     **********************************************/
/******************************************************************************************************************/

function hideDeveloperName() {
  if (document.activeElement === titleText || document.activeElement === notesText) {
    developerNameDiv.style.display = "none";
  } else (developerNameDiv.style.display = "flex")
  // console.log("check my text box is active")
}



/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     Show Notes     **********************************************/
/******************************************************************************************************************/

//We will use this function when ever we will change anything with our notes (delete, important, edit, selction) or submit.

function showNotes() {
  let notes = localStorage.getItem("notesDataWithEditFeature");

  if (notes == null) {
    notesObj = [];
    titleFor = [];
    notesFor = [];
    importantFor = [];
    timeFor = [];
  }
  else {
    notesObj = JSON.parse(notes);
    titleFor = notesObj[0];
    notesFor = notesObj[1];
    importantFor = notesObj[2];
    timeFor = notesObj[3];
  }

  //A variable counter for when it runs again again it updated by one and for generating unique ID.
  let counter = 0;

  //A blank string variable for appending new tocken ie. notes area html code. Create new form for every notes.
  let html = "";

  //We use array.forEach function because we are making dynamicly forms for every notes. like if we have previously save 10 notes then it will firstly create 10 boxes for ten notes then after each submit it will run and check how many object items in note and it will create accordingly.
  //We use element only in title and for others we will make seprate forEach for everone. I face some problem when I added important feature.
  titleFor.forEach(function (element) {
    html += `<form onsubmit="return false" id = "formID${counter}" class = "formClass">
    <input type="reset" value="X" id = "${counter}" class = "deleteButton" onclick = "removeText(this.id)">
    <div id = "titleContainer${counter}" class="titleContainer" >${element}</div>
    <div id = "notesContainer${counter}" class="notesContainer"></div>
    <div class="toolDivInAllNotes" >
    <span  id = "timeID${counter}" class = "timeClassSpan"></span>
    <input type="button" value="Edit" id = "editID${counter}" class = "editClass">
    <label for="editID${counter}" id = "editForID${counter}" class="editNotesItemClass" onclick = "editNotes(this.id)"><img src="editIcon.png" alt="" srcset=""></label>
    <input type="checkbox" name="" id = "importantID${counter}" class = "importantClass" >    <label for="importantID${counter}" id = "forID${counter}" class="importantNotesItemClass" onclick = "importantNotes(this.id)"><img src="grayHeart.png" alt="" srcset="">
    </div>
    </label>
    </form>`;
    counter++;
  });

  //When all the boxes created then it targets html id and put all the items indide. We place it outside from for each because when we have only single note and try to delete it then it is not working because that time notesObj object is complete blank and at the time of forEach function it didnot go inside because nothing present. Then html is updated to blank but not asign to html div id. thats why it present always.
  notesMainContainer.innerHTML = html;

  //forEach for notes data. It runs for all items presented inside notesArray(notesFor) and will put note data.
  let notesCounter = 0;
  notesFor.forEach(function (element) {
    document.getElementById("notesContainer" + notesCounter).innerText =
      element;
    notesCounter++;
  });

  //forEach for important data. It runs for all items presented inside importantArray(importantFor) and will put important data.
  let importantCounter = 0;
  importantFor.forEach(function (element) {
    document.getElementById("importantID" + importantCounter).checked = element;

    if (document.getElementById("importantID" + importantCounter).checked == true) {
      document.getElementById("forID" + importantCounter).innerHTML = `<img src="pinkHeart.png" alt="" srcset="">`
      document.getElementById("formID" + importantCounter).style.backgroundColor = "rgb(255, 254, 236)";
      document.getElementById("formID" + importantCounter).style.borderColor = "rgb(90, 20, 255)";
      document.getElementById("notesContainer" + importantCounter).style.backgroundColor = "rgb(255, 254, 236)";
      document.getElementById("titleContainer" + importantCounter).style.backgroundColor = "rgb(153, 0, 255)";
      document.getElementById(importantCounter).style.backgroundColor = "rgb(40, 40, 41)";
    }
    importantCounter++;
  });

  //forEach for time data. It runs for all items presented inside timeArray(timeFor) and will put time data.
  let timeCounter = 0;
  timeFor.forEach(function (element) {
    document.getElementById("timeID" + timeCounter).innerText =
      element;
    timeCounter++;
  });


  if(imptortantNotesPageID.checked == true){
    importantNotesPage();
  } else{
    allNotesPage();
  }

}



/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     collectText     **********************************************/
/******************************************************************************************************************/

//This is our main function attached with submit button for when we click on it ie. below of text-area it will save our notes data and also show the notes in bottom.

function collectText() {

  //This is for fetching if our notes presented in local storage.
  let notes = localStorage.getItem("notesDataWithEditFeature");

  //This is for show alert message if user try to submit blank or only white spaces in title and stop the program to make blank object
  // console.log(titleText.value.length);

  if (titleText.value.trim().length != 0) {

    //More than 100 letters will not allowed in title. 
    if (titleText.value.length <= 100) {

      //This is for show alert message if user try to submit blank or only white spaces in Notes Content and stop the program to make blank object
      if (notesText.value.trim().length != 0) {

        //If nothing in the local storage program returns null so we have to create a black object.
        if (notes == null) {
          notesObj = [];           //We will put all the arrays(titleFor,NotesFor etc.) inside it.
          titleFor = [];          //We will collect title data after submit.    
          notesFor = [];         //We will collect notes content data after submit.
          importantFor = [];    //We will collect important check (initially zero in all notes and initially one in important notes) data after submit.
          timeFor = [];        //We will collect Current Date and Time data after submit.
        }

        //If notes have already objects then we have to parse notes for convert string formated object to object format.
        else {
          notesObj = JSON.parse(notes);
          titleFor = notesObj[0];         //We extract title data array.
          notesFor = notesObj[1];        //We extract notes data array.
          importantFor = notesObj[2];   //We extract important data array.
          timeFor = notesObj[3];       //We extract time data array.
          notesObj = [];              //After extracting all the data we will delete all arrays from notesObj to push new submit data.
        }

        //When notes parse then we can push new values in this object.

        titleFor.push(titleText.value);    //Here we are pushing new title data in existing title array.
        notesFor.push(notesText.value);   //Here we are pushing new notes content data in existing title array.

        //Here we are checking if you are writting notes from important page then it will put 1 to make your notes important automaticlly otherwise 0.
        if (imptortantNotesPageID.checked == true) {
          importantFor.push(parseInt(1));
        } else { importantFor.push(parseInt(0)); }

        let date = new Date(); //date is a variable where we are asigning current date.

        //We are extracting Date from complete date.
        let notesDate1 = ((date.getDate() < 10) ? "0" + date.getDate() : date.getDate()) + "-" + ((date.getMonth() < 10) ? "0" + date.getMonth() : date.getMonth()) + "-" + ((date.getFullYear() < 10) ? "0" + date.getFullYear() : date.getFullYear()) + " | ";

        //We are extracting Time from complete date.      
        let notesDate2 = ((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()) + ":" + ((date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds());

        //Here we are merging date and time by concat function  
        let notesDate = notesDate1.concat(" ", notesDate2)

        //After that we push notesDate in time array.
        timeFor.push(notesDate);

        //After pushing all the data inside inividaul array we put all the individual array inside notesObj
        notesObj.push(titleFor);
        notesObj.push(notesFor);
        notesObj.push(importantFor);
        notesObj.push(timeFor);


        //After pushing new values and old values in noteObj we have to set in th local storage to update the local storage with updated value. We use same name 'notesDataWithEditFeature' for when we run showNotes() then it will append new values in same name so we can easly delete or search.
        localStorage.setItem("notesDataWithEditFeature", JSON.stringify(notesObj));

        //Clear text area after setting all the data in local storage
        titleText.value = "";
        notesText.value = "";

        //If user writes big notes then notes text area automatically increase by max-height of css. So after submit we should reset the size for better User Experience.
        notesText.style.height = "5rem";

        //Show Notes functun for showing updated values after submit.
        showNotes();
      }

      //If try to submit blank then show alert message.
      else {
        alert("Hey You Haven't Written anything in Note Content");
      }
    } else {
      alert("Notes Title must be less than 100 letters");
      }
  } else{
   alert("Please write best title for your Note");
  }

  //If user submit his notes from important section then after submit you want to be on important page that why we call importanPage() and change the heart color of big heart.
  if (imptortantNotesPageID.checked == true) {
    importantNotesPage();
    imptortantNotesPageClass[0].innerHTML = `<img src="pinkHeart.png" alt="" srcset=""></img>`
  }
  else {
    allNotesPage();
    imptortantNotesPageClass[0].innerHTML = `<img src="grayHeart.png" alt="" srcset=""></img>`
  }

  //Hide Text Area after submit so use only can see the notes.
  hideAfterSubmit();

  //After hideing the text img of minus button change to plus button but the checkbox with id #addNewNotes is checked not changed to uncheck. Because of that when we want to write new notes then we have to click two time first for uncheck and then when we click again the text area will unhide.
  //That why I unchecked it forcefully.
  addNewNotes.checked = false;

  //This is for scroll to bottom where new notes is added. It is working on cumputer but not in mobile. I think may be for developer tag. 
  window.scrollTo(0, document.body.scrollHeight);
}


/************************************************    Discard Notes     **********************************************/
/******************************************************************************************************************/

function discardText() {
  let text = "Are You Sure You Want To Discard Your Notes";
  if (confirm(text) == true) {
    titleText.value = "";
    notesText.value = "";
  }
}




/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     Remove Notes Template     **********************************************/
/******************************************************************************************************************/

function removeNotesTemplate(control) {
  let notes = localStorage.getItem("notesDataWithEditFeature");

  if (notes == null) {
    notesObj = [];
    titleFor = [];
    notesFor = [];
    importantFor = [];
    timeFor = [];
  }
  //If notes have already objects then we have to parse notes for convert string formated object to object format.
  else {
    notesObj = JSON.parse(notes);
    titleFor = notesObj[0];
    notesFor = notesObj[1];
    importantFor = notesObj[2];
    timeFor = notesObj[3];
    notesObj = [];
  }

  //We use splice becaust it take 3 arguments 1st is from where, 2nd is how many items need to remove, items to add. if we use cleverly this function we can remove array items by passing only 2 arguments.
  titleFor.splice(control, 1);
  notesFor.splice(control, 1);
  importantFor.splice(control, 1);
  timeFor.splice(control, 1);

  notesObj.push(titleFor);
  notesObj.push(notesFor);
  notesObj.push(importantFor);
  notesObj.push(timeFor);

  //We set updated item in local storage.
  localStorage.setItem("notesDataWithEditFeature", JSON.stringify(notesObj));

  //Then at last use showNotes for show update notes in DOM
  showNotes();

  if (imptortantNotesPageID.checked == true) {
    importantNotesPage();
    // imptortantNotesPageClass[0].innerHTML = `<img src="pinkHeart.png" alt="" srcset=""></img>`
  }
  else {
    allNotesPage();
    // imptortantNotesPageClass[0].innerHTML = `<img src="grayHeart.png" alt="" srcset=""></img>`
  }
}


/************************************************     Remove Text (Delete One by One Notes)     **********************************************/
/******************************************************************************************************************/

//This is for deleting one notes at a time.
function removeText(control) {
  let text = "Are You Sure You Want To Delete " + document.getElementById("titleContainer" + control).innerText;
  if (confirm(text) == true) {

    removeNotesTemplate(control);

    if (titleFor.length == 0 && titleText.style.display != "none" && imptortantNotesPageID.checked == false) {
      allNotesPage();
      localStorage.removeItem("notesDataWithEditFeature");
    }
    else if (titleFor.length == 0 && titleText.style.display == "none" && imptortantNotesPageID.checked == false) {
      allNotesPage();
      localStorage.removeItem("notesDataWithEditFeature");
    }

    if (titleFor.length == 0 && titleText.style.display != "none" && imptortantNotesPageID.checked == true) {
      importantNotesPage();
      localStorage.removeItem("notesDataWithEditFeature");
      
    }
    else if (titleFor.length == 0 && titleText.style.display == "none" && imptortantNotesPageID.checked == true) {
      importantNotesPage();
      localStorage.removeItem("notesDataWithEditFeature");
    }
  }
}


/************************************************     Delete All Notes     **********************************************/
/******************************************************************************************************************/

function deleteAllNotes() {
  let text = "Are You Sure You Want To Delete All Of Your Note";

  if (confirm(text) == true) {
    localStorage.removeItem("notesDataWithEditFeature");
    //Then at last use showNotes for show update notes in DOM
    showNotes();
  }
}



/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     Important Notes     **********************************************/
/******************************************************************************************************************/

function importantNotes(control) {
  //This is for fetching if our notes presented in local storage.
  let notes = localStorage.getItem("notesDataWithEditFeature");

  // console.log(control, document.getElementById(control).innerHTML = `<img src="pinkHeart.png" alt="" srcset="">`)

  switch (document.getElementById(`importantID${control.substring(5)}`).checked) {
    case true:
      document.getElementById("importantID" + control.substring(5)).checked = false;
      document.getElementById(control).innerHTML = `<img src="grayHeart.png" alt="" srcset="">`;

      break;
    case false:
      document.getElementById("importantID" + control.substring(5)).checked = true;
      document.getElementById(control).innerHTML = `<img src="pinkHeart.png" alt="" srcset="">`;
      break;
  }

  //This is for show alert message if user try to submit blank or only white spaces and stop the program to make blank object

  //If nothing in the local storage program returns null so we have to create a black object.
  if (notes == null) {
    notesObj = [];
    titleFor = [];
    notesFor = [];
    importantFor = [];
    timeFor = [];
  }

  //If notes have already objects then we have to parse notes for convert string formated object to object format.
  else {
    notesObj = JSON.parse(notes);
    titleFor = notesObj[0];
    notesFor = notesObj[1];
    importantFor = notesObj[2];
    timeFor = notesObj[3];
    notesObj = [];
  }

  //When notes parse then we can push new values in this object.
  // console.log("rrasfdgdfgsdgfsdgds",control.substring(5),"importantID" + control.substring(5))

  switch (document.getElementById("importantID" + control.substring(5)).checked) {
    case true:
      importantFor.splice(control.substring(5), 1, 1);
      // console.log("inside true switch",importantFor)
      break;
    case false: importantFor.splice(control.substring(5), 1, 0);
      // console.log("inside false switch",importantFor)
      break;
  }

  // console.log("inside important title",titleFor);

  // console.log("inside important notes",notesFor);
  notesObj.push(titleFor);
  notesObj.push(notesFor);
  notesObj.push(importantFor);
  notesObj.push(timeFor);

  // console.log("inside important notesobj",notesObj);

  //After pushing new values in object we have to set in th local storage to update the local storage with new value. We use same name 'notesDataWithEditFeature' for when we run showNotes() then it will append new values in same name so we can easly delete or search.
  localStorage.setItem("notesDataWithEditFeature", JSON.stringify(notesObj));
  // console.log("this is local storage", localStorage)

  showNotes();

  if (titleText.style.display != "none") {
    savedNotesWelcomeAreaBarParent.style.marginTop = "3rem";
  }
}


/************************************************     Important Notes Page     **********************************************/
/******************************************************************************************************************/

function importantNotesPage() {

  // let importantClass = document.getElementsByClassName("importantClass");

  let notes = localStorage.getItem("notesDataWithEditFeature");
  imptortantNotesPageClass[0].innerHTML = `<img src="pinkHeart.png" alt="" srcset=""></img>`

  if (addNewNotes.checked == true) {
    addNewNotes.checked = false;
    hideAfterSubmit();
  }

  if (notes == null) {
    notesObj = [];
    titleFor = [];
    notesFor = [];
    importantFor = [];
    timeFor = [];
  }

  //If notes have already objects then we have to parse notes for convert string formated object to object format.
  else {
    notesObj = JSON.parse(notes);
    titleFor = notesObj[0];
    notesFor = notesObj[1];
    importantFor = notesObj[2];
    timeFor = notesObj[3];
  }

  let ind = 0;
  if (importantFor.length != 0) {
    importantFor.forEach(function (element) {
      if (element == 1) {
        document.getElementById("formID" + ind).style.display = "block";
        // savedNotesWelcomeAreaBarText.innerText = "Only Important Notes";
        savedNotesWelcomeAreaBarText.style.backgroundColor = "pink";
        savedNotesWelcomeAreaBar.style.backgroundColor = "pink";
      }
      else {
        document.getElementById("formID" + ind).style.display = "none";
        savedNotesWelcomeAreaBarText.style.width = "60vw";
        savedNotesWelcomeAreaBarText.style.margin = "auto";
        savedNotesWelcomeAreaBarText.style.backgroundColor = "pink";
        savedNotesWelcomeAreaBar.style.backgroundColor = "pink";
        deleteAllNotess.style.display = "none";
      }

      ind++
    })
  }

  if (importantFor.length != 0) {
    for (let index = 0; index < importantFor.length; index++) {
      const element = importantFor[index];
      if (element == 1) {
        savedNotesWelcomeAreaBarText.style.width = "53vw";
        savedNotesWelcomeAreaBarText.style.margin = "0rem";
        suggetionParaDiv.style.display = "none";
        savedNotesWelcomeAreaBarText.innerText = "Only Important Notes";
        deleteAllNotess.style.display = "block";
        addNewNotes.checked = false;
        hideAfterSubmit();
        
        break;
      }
      else {
        savedNotesWelcomeAreaBarText.innerText = "No Important Notes Available";
        suggetionParaDiv.style.display = "flex";
        
        if (addNewNotes.checked == false) {
          addNewNotes.checked = true;
          showAfterAddNewNotes();
          notesMainContainer.style.display = "grid";
          savedNotesWelcomeAreaBarParent.style.display = "block";

          suggetionPara.innerText = "What you write here will be automatically add in your important list or go back to you all notes and click on little heart inside notes";
          suggetionPara.style.color = "rgb(255, 105, 180)"
        }
      }
    }
  } 

  


 
 else if (importantFor.length == 0 && imptortantNotesPageID.checked == true) {
    addNewNotes.checked = true;
    showAfterAddNewNotes();
    notesMainContainer.style.display = "grid";
    savedNotesWelcomeAreaBarParent.style.display = "block";

    suggetionPara.innerText = "What you write here will be automatically add in your important list or You can write notes in normal section and after that you can click little heart to make your notes important."
    suggetionParaDiv.style.display = "flex";
    suggetionPara.style.color = "rgb(255, 105, 180)"
    deleteAllNotess.style.display = "none"
    savedNotesWelcomeAreaBar.style.display = "flex";
    savedNotesWelcomeAreaBar.style.justifyContent = "center";
    savedNotesWelcomeAreaBar.style.alignItems = "center";
    savedNotesWelcomeAreaBarText.style.width = "60vw";
    savedNotesWelcomeAreaBarText.style.display = "flex";
    savedNotesWelcomeAreaBarText.style.justifyContent = "center";
    savedNotesWelcomeAreaBarText.style.alignItems = "center";
    savedNotesWelcomeAreaBarText.style.backgroundColor = "pink";
    savedNotesWelcomeAreaBar.style.backgroundColor = "pink";
    savedNotesWelcomeAreaBarText.innerText = "No Important Notes Available";
  }


  /*
  if (importantFor.length > 0 && imptortantNotesPageID.checked == true) {
    suggetionParaDiv.style.display = "flex";
    suggetionPara.innerText = "What you write here will automatically add in your important list or You can just click on grey heart inside your note.";
    suggetionPara.style.color = "rgb(255, 105, 180)"
    deleteAllNotess.style.display = "none"
    savedNotesWelcomeAreaBar.style.display = "flex";
    savedNotesWelcomeAreaBar.style.justifyContent = "center";
    savedNotesWelcomeAreaBar.style.alignItems = "center";
    savedNotesWelcomeAreaBarText.style.width = "60vw";
    savedNotesWelcomeAreaBarText.style.display = "flex";
    savedNotesWelcomeAreaBarText.style.justifyContent = "center";
    savedNotesWelcomeAreaBarText.style.alignItems = "center";
    savedNotesWelcomeAreaBarText.style.backgroundColor = "pink";
    savedNotesWelcomeAreaBar.style.backgroundColor = "pink";
    savedNotesWelcomeAreaBarText.innerText = "No Important Notes Available";

    if (addNewNotes.checked == true) {
      suggetionPara.innerText = "What you write here will automatically add in your important list or You can just click on grey heart inside your note.";
    }

    else if (addNewNotes.checked == false) {
      suggetionPara.innerText = "What you write here will automatically add in your important list. Please Click on 'Plus' button to show writing area or You can just click on grey heart inside your note.";
    }
  } */
}


/************************************************     All Notes Page     **********************************************/
/******************************************************************************************************************/

function allNotesPage() {

  // let importantClass = document.getElementsByClassName("importantClass");
  let notes = localStorage.getItem("notesDataWithEditFeature");
  imptortantNotesPageClass[0].innerHTML = `<img src="grayHeart.png" alt="" srcset=""></img>`

  if (addNewNotes.checked == true) {
    addNewNotes.checked = false;
    hideAfterSubmit();
  }

  if (notes == null) {
    notesObj = [];
    titleFor = [];
    notesFor = [];
    importantFor = [];
    timeFor = [];
  }
  //If notes have already objects then we have to parse notes for convert string formated object to object format.
  else {
    notesObj = JSON.parse(notes);
    titleFor = notesObj[0];
    notesFor = notesObj[1];
    importantFor = notesObj[2];
    timeFor = notesObj[3];
  }

  let ind = 0;

  if (titleFor.length != 0 && imptortantNotesPageID.checked == false) {
  titleFor.forEach(function () {
    addNewNotes.checked = false;
    hideAfterSubmit();

    document.getElementById("formID" + ind).style.display = "block";
    container.style.display = "flex";
    welcomeTag.innerText = "Welocme to our notes app"
    savedNotesWelcomeAreaBarText.style.display = "block";
    savedNotesWelcomeAreaBarText.style.margin = "0vw";
    savedNotesWelcomeAreaBarText.style.width = "53vw";
    savedNotesWelcomeAreaBarText.style.backgroundColor = "rgb(189, 189, 189)";
    savedNotesWelcomeAreaBar.style.backgroundColor = "rgb(189, 189, 189)";
    savedNotesWelcomeAreaBarText.innerText = "Your all notes are below";
    deleteAllNotess.style.display = "block"
    savedNotesWelcomeAreaBarParent.style.display = "block";
    savedNotesWelcomeAreaBarParent.style.marginTop = "-1.5rem";
    navbarParent.style.marginTop = "0rem";
    suggetionParaDiv.style.display = "none";
    ind++;
  });
}

  if (titleFor.length == 0 && imptortantNotesPageID.checked == false) {
    addNewNotes.checked = true;
    showAfterAddNewNotes();
    notesMainContainer.style.display = "grid";
    savedNotesWelcomeAreaBarParent.style.display = "block";

    suggetionParaDiv.style.display = "flex";
    suggetionPara.style.color = "rgb(128, 128, 128)"
    savedNotesWelcomeAreaBar.style.display = "flex";
    savedNotesWelcomeAreaBar.style.justifyContent = "center";
    deleteAllNotess.style.display = "none";
    savedNotesWelcomeAreaBarText.style.backgroundColor = "rgb(189, 189, 189)";
    savedNotesWelcomeAreaBar.style.backgroundColor = "rgb(189, 189, 189)";
    savedNotesWelcomeAreaBarText.style.width = "60vw";
    savedNotesWelcomeAreaBarText.style.textAlign = "center";
    savedNotesWelcomeAreaBarText.style.display = "block";
    savedNotesWelcomeAreaBarText.style.margin = "0rem";
    suggetionPara.innerText = "Please Write Some Notes by clicking 'Plus' sign on top and click on the little Heart to your important notes or directly go to the important section and write there to add in your important list.";
    savedNotesWelcomeAreaBarText.innerText = "No Notes Available";
    savedNotesWelcomeAreaBarParent.style.display = "block";
  }
}


/************************************************     Important Notes List     **********************************************/
/******************************************************************************************************************/

function importantNotesList() {

  if (imptortantNotesPageID.checked == false) {
    imptortantNotesPageID.checked = true;
    importantNotesPage();
    imptortantNotesPageID.checked = false;

  }
  else {
    imptortantNotesPageID.checked = false;
    allNotesPage();
    imptortantNotesPageID.checked = true;
  }
}



/******************************************************************************************************************/
/************************************************************************************************************************ */
/************************************************     Edit Notes     **********************************************/
/******************************************************************************************************************/

function editNotes(control) {

  submitButton.style.display = "none";
  discardButton.style.display = "none";
  submitButtonAfterEdit.style.display = "inline-block";
  discardButtonAfterEdit.style.display = "inline-block";
  titleText.style.display = "inline-block";
  notesText.style.display = "inline-block";
  window.scrollTo(0, 0);
  titleText.focus();

  let x = document.getElementById("titleContainer" + control.substring(9)).innerText;
  let y = document.getElementById("notesContainer" + control.substring(9)).innerText;
  titleText.value = x;
  notesText.value = y;

  notesIdAtEdit.innerText = control.substring(9);
  addNewNotes.disabled = true;
  savedNotesWelcomeAreaBarParent.style.marginTop = "3rem";
}


/************************************************     Collect Notes on Edit     **********************************************/
/******************************************************************************************************************/

function collectTextOnEdit() {

  let text = "Are You Sure You Want To Edit " + document.getElementById("titleContainer" + notesIdAtEdit.innerText).innerText;
  if (confirm(text) == true) {

    console.log(document.getElementById("importantID" + notesIdAtEdit.innerText).checked);

    switch (document.getElementById("importantID" + notesIdAtEdit.innerText).checked) {
      case true:
        removeNotesTemplate(notesIdAtEdit.innerText);
        collectText();
        console.log("Inside true ", document.getElementById("importantID" + notesIdAtEdit.innerText).checked)
        document.getElementById("importantID" + notesIdAtEdit.innerText).checked = true;
        console.log("Inside after try true ", document.getElementById("importantID" + notesIdAtEdit.innerText).checked)
        let notes = localStorage.getItem("notesDataWithEditFeature");
        if (notes == null) {
          notesObj = [];
          titleFor = [];
          notesFor = [];
          importantFor = [];
          timeFor = [];
        }
        else {
          notesObj = JSON.parse(notes);
          titleFor = notesObj[0];
          notesFor = notesObj[1];
          importantFor = notesObj[2];
          timeFor = notesObj[3];
          notesObj = [];
        }

        importantFor.splice(importantFor.length - 1, 1, 1);
        notesObj.push(titleFor);
        notesObj.push(notesFor);
        notesObj.push(importantFor);
        notesObj.push(timeFor);
        localStorage.setItem("notesDataWithEditFeature", JSON.stringify(notesObj));
        notesIdAtEdit.innerText = "";
        showNotes();
        break;
      case false:
        removeNotesTemplate(notesIdAtEdit.innerText);
        collectText();
        break;
    }

    submitButtonAfterEdit.style.display = "none";
    discardButtonAfterEdit.style.display = "none";
    addNewNotes.disabled = false;
  }
}


/************************************************    Discard Notes on Edit     **********************************************/
/******************************************************************************************************************/

function discardEdit() {
  let text = "Are You Sure You Want To Discard Your Changes" + document.getElementById("titleContainer" + notesIdAtEdit.innerText).innerText;
  if (confirm(text) == true) {
    titleText.value = "";
    notesText.value = "";
    notesIdAtEdit.innerText = "";
    submitButton.style.display = "none";
    discardButton.style.display = "none";
    titleText.style.display = "none";
    notesText.style.display = "none";
    submitButtonAfterEdit.style.display = "none";
    discardButtonAfterEdit.style.display = "none";
    addNewNotes.disabled = false;
    savedNotesWelcomeAreaBarParent.style.marginTop = "-1.5rem";

  }
}



/************************************************************************************************************************ */
/************************************************************************************************************************ */
/************************************************     Search Text Func     **********************************************/
/******************************************************************************************************************/

//This is for search text
function searchTextFunc() {
  //This is for extrating search value (search text typed by user)

  searchTextContent = searchText.value.trim().toLowerCase();

  //This is for targetting all the classes where notes are presented.

  // console.log(notesContainer[0]);

  //We are using for loop for checking text in every container where notes is presented.

  if (imptortantNotesPageID.checked == true) {
    if (inTitleSearch.checked == true) {
      for (let ind = 0; ind < notesContainer.length; ind++) {

        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          titleContainer[ind].innerText.toLowerCase().includes(searchTextContent) && importantFor[ind] == 1
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in title for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in title section for " + searchText.value.trim();

        }
      }
    }

    if (inNotesSearch.checked == true) {

      for (let ind = 0; ind < notesContainer.length; ind++) {
        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          notesContainer[ind].innerText.toLowerCase().includes(searchTextContent) && importantFor[ind] == 1
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in notes for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in notes content section for " + searchText.value.trim();
        }
      }
    }

    if (inDateSearch.checked == true) {
      for (let ind = 0; ind < notesContainer.length; ind++) {

        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          timeClassSpan[ind].innerText.includes(searchTextContent) && importantFor[ind] == 1
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in Date for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in date section for " + searchText.value.trim();
        }
      }
    }

    if (inAllNotes.checked == true) {

      for (let ind = 0; ind < notesContainer.length; ind++) {
        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if ((
          notesContainer[ind].innerText.toLowerCase().includes(searchTextContent) ||
          titleContainer[ind].innerText.toLowerCase().includes(searchTextContent) ||
          timeClassSpan[ind].innerText.includes(searchTextContent)) && importantFor[ind] == 1
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in all notes for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in all notes for " + searchText.value.trim();
        }
      }
    }
  }
  else {
    if (inTitleSearch.checked == true) {
      for (let ind = 0; ind < notesContainer.length; ind++) {

        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          titleContainer[ind].innerText.toLowerCase().includes(searchTextContent)
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in title for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in title section for " + searchText.value.trim();
        }
      }
    }

    if (inNotesSearch.checked == true) {

      for (let ind = 0; ind < notesContainer.length; ind++) {
        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          notesContainer[ind].innerText.toLowerCase().includes(searchTextContent)
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in notes for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in notes content section for " + searchText.value.trim();
        }
      }
    }

    if (inDateSearch.checked == true) {
      for (let ind = 0; ind < notesContainer.length; ind++) {

        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          timeClassSpan[ind].innerText.includes(searchTextContent)
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in Date for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in date section for " + searchText.value.trim();
        }
      }
    }

    if (inAllNotes.checked == true) {

      for (let ind = 0; ind < notesContainer.length; ind++) {
        //We are using includes methond to check search text is available or not in ind no. container if presented then we block the dislay of this container and if not then we none the display of the container.
        if (
          notesContainer[ind].innerText.toLowerCase().includes(searchTextContent) ||
          titleContainer[ind].innerText.toLowerCase().includes(searchTextContent) ||
          timeClassSpan[ind].innerText.includes(searchTextContent)
        ) {
          document.getElementById("formID" + ind).style.display = "block";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.innerText = "Search results in all notes for " + searchText.value.trim();
          welcomeTag.style.fontSize = "4vw";
          welcomeTag.style.color = "rgb(73, 73, 73)";
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
        }
        else {
          document.getElementById("formID" + ind).style.display = "none";
          container.style.display = "none";
          deleteAllNotess.style.display = "none";
          savedNotesWelcomeAreaBarParent.style.display = "none";
          welcomeTag.style.fontSize = "4vw"
          welcomeTag.style.color = "rgb(73, 73, 73)"
          navbarParent.style.marginTop = "0rem";
          notesMainContainer.style.marginTop = "8rem";
          // welcomeTag.innerText = "No Search results in all notes for " + searchText.value.trim();
        }
      }
    }
  }

  /******************************************************* */

  if (searchTextContent.length == 0) {
    deleteAllNotess.style.display = "block";
    savedNotesWelcomeAreaBarParent.style.display = "block";
    container.style.display = "flex";
    welcomeTag.innerText = "Welocme to our notes app"
    welcomeTag.style.fontSize = "5vw"
    welcomeTag.style.color = "black"
    notesMainContainer.style.marginTop = "0rem";
    navbarParent.style.marginTop = "0rem";
  }
}
