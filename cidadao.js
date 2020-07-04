

function myFunction() {
    var age = document.getElementById("age").value;
    var a = document.getElementById('n451');
    var b = document.getElementById('n392');
    var c = document.getElementById('n420');
    var d = document.getElementById('n699');
    var e = document.getElementById('n543');
    var f = document.getElementById('n291');
    var g = document.getElementById('n704');
    var h = document.getElementById('n547');
    var i = document.getElementById('n148');
    submitOK = "true";


    if (age == 451 || age == 392 || age == 420 || age == 699 || age == 543 || age == 291 || age == 704 || age ==
        547 || age == 148) {

        if (age == 451) {
            a.style.display = 'block';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 392) {
            a.style.display = 'none';
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 420) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 699) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'block';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 543) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'block';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 291) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'block';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 704) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'block';
            h.style.display = 'none';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 547) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'block';
            i.style.display = 'none';
            submitOK = "false";
        }

        if (age == 148) {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'block';
            submitOK = "false";
        }
    } else {
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        alert("NÚMERO DE CIDADÃO INVÁLIDO");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }

}