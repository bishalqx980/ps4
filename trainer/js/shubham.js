/* document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".dropdown-trigger");
    let instances = M.Dropdown.init(elems, {
        alignment: "center",
    });
});
 */

window.addEventListener("load", function () {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);

    window.modalInstances = M.Modal.init(document.querySelectorAll(".modal"));
});
