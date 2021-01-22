function addContact(index) {
    var clon = document.getElementsByClassName('addContact')[index].cloneNode(true);
    document.getElementById("contactsBD").append(clon);
    let lastIndex = document.querySelectorAll("#contactsBD")[0].children.length - 1;
    document.querySelectorAll("#contactsBD")[0].children[lastIndex].attributes[1].nodeValue = `deleteContact(${lastIndex})`;
    document.querySelectorAll('#contactsBD')[0].children[lastIndex].id=`card${lastIndex}`;
}
function deleteContact(index) {
    document.getElementById(`card${index}`).remove('slow');
}