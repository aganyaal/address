// business logic
function Contact(first, last , next) {
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber= next;
}
Contact.prototype.fullname = function() {
    return this.firstName + " " + this.lastName
}
// user interface
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var input1 = $("input#new-first-name").val();
        var input2 = $("input#new-last-name").val();
        var input3 = $("input#new-phone-number").val();

        var newContact = new Contact(input1, input2, input3);

        $("ol#contacts").append("<li><span class='contact'>" + newContact.fullname() + "</span></li>");

        // $("input#new-first-name").val("");
        // $("input#new-last-name").val("");
        // $("input#new-phone-number").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullname());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".phone-number").text(newContact.phoneNumber);
        });
    });
});
