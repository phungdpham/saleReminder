

//holding all of follow-up cards for current date
$(document).ready(function() {
    //cardContainer holds all follow-up cards
    var cardsContainer = $("#card_container");
    //click events for follow up, complete and delete buttons
    $(document).on("click", "button.follow-up", proceedNextFolUp);
    $(document).on("click", "button.complete", completeFolUp);
    $(document).on("click", "button.delete", deleteFolUp);
    var folUpCards;

    //Function to grabs follow-up cards from the database and update the view
    function getFolUp() {
        $.get("/api/followup", function(data) {
            console.log("FollowUp", data);
            folUpCards = data;
            if (!folUpCards || !folUpCards.length) {
                displayEmpty();
            }
            else {
                initializeCards();
            }
        });
    }

    //Getting the initial list of follow up cards
    getFolUp();
    //InitializeCards handles appending all of follow up cards HTML inside
    //CardsContainer
    function initializeCards() {
        cardsContainer.empty();
        var cardsToAdd = [];
        for (var i = 0; i < folUpCards.length; i++) {
            cardsToAdd.push(createNewCard(folUpCards[i]));
        }
        cardsContainer.append(cardsToAdd);
    }

    //Function that constructs a follow up card's HTML
    function createNewCard(folUpCard) {
        //Creating a whole new follow up card
        var newFolUpCard = $("<div>");
        newFolUpCard.addClass("card text-white bg-warning mb-3 new_card");

        //Follow Up Card header
        var newFolUpCardHeading = $("<div>");
        newFolUpCardHeading.addClass("card-header bg-transparent border-warning");
        //Showing Customer Id (not sure if the code to retreive customer id is correct)
                // var newFolUpCustId = $("<span>");
                // newFolUpCustId.addClass("cust_id float-left");
                // newFolUpCustId.text(folUpCard.customers.id)
        //Showing Customer Name
        var newFolUpCustName = $("<span>");
        newFolUpCustName.addClass("cust_name float-left");
        newFolUpCustName.text("Customer: " + folUpCard.firstname + " " + folUpCard.lastname + " || ");
        //Showing Business Name
        var newFolUpBusName = $("<span>");
        newFolUpBusName.addClass("business_name float-right");
        newFolUpBusName.addClass(folUpCard.business_name);

        //Follow up card body
        var  newFolUpBody = $("<div>");
        newFolUpBody.addClass("card-body");
        //Showing card action
        var newFolUpAction = $("<h6>");
        newFolUpAction.addClass("card-title action");
        newFolUpAction.text("Action: " + folUpCard.action);
        //showing card status
        var newFolUpStatus = $("<p>");
        newFolUpStatus.addClass("card-text status");
        newFolUpStatus.text("Recent Status: " + folUpCard.status);
        //Showing card memo
        var newFolUpMemo = $("<p>");
        newFolUpMemo.addClass("card-text memo");
        newFolUpMemo.text("Memo: " + folUpCard.memo);
        //showing work phone and mobile phone
        var newFolUpNum = $("<p>");
        newFolUpNum.addClass("card-text contact");
        var newFolUpWorkNum = $("<span>");
        newFolUpWorkNum.addClass("work-num");
        newFolUpWorkNum.text(folUpCard.workphone + " || ");
        var newFolUpMobileNum = $("<span>");
        newFolUpMobileNum.addClass("mobile-num");
        newFolUpMobileNum.text(folUpCard.mobilephone);

        //Structuring the card html
        newFolUpCard.append(newFolUpCardHeading);
        newFolUpCard.append(newFolUpBody);
        newFolUpCardHeading.append(newFolUpCustName);
        newFolUpCardHeading.append(newFolUpBusName);
        newFolUpBody.append(newFolUpAction);
        newFolUpBody.append(newFolUpStatus);
        newFolUpBody.append(newFolUpMemo);
        newFolUpBody.append(newFolUpNum);
        newFolUpNum.append(newFolUpWorkNum);
        newFolUpNum.append(newFolUpMobileNum);

        //Buttons inside the follow up card
        var deleteBtn = $("<button>");
        deleteBtn.text("Delete");
        deleteBtn.addClass("btn btn-outline-dark float-left delete");
        var folUpBtn = $("<button>");
        folUpBtn.text("Follow Up");
        folUpBtn.addClass("btn btn-dark float-right mx-3 follow-up");
        var completeBtn = $("<button>");
        completeBtn.text("Complete");
        completeBtn.addClass("btn btn-outline-dark float-right complete");

        return newFolUpCard;
    };

    //Function to complete a follow-up
    // function completeFolUp() {
    //     var currentFolUpCard = $(this)
    // }















});
