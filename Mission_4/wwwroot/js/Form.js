
$("#btnSend").click(function () {
    var assignmentGrade = $("#assignment").val();
    var quizGrade = $("#quiz").val();
    var group_Grade = $("#group_project").val();
    var midtermGrade = $("#midterm").val();
    var finalGrade = $("#final").val();
    var intex = $("#intex").val();

    var percentGrade = (assignmentGrade * .5) + (quizGrade * .1) + (group_Grade * .1) + (midtermGrade * .1) + (finalGrade * .1) + (intex * .1);
    var letterGrade;
    switch (true) {
        case percentGrade >= 94:
            letterGrade = 'A'
            break;
        case percentGrade >= 90:
            letterGrade = 'A-'
            break;
        case percentGrade >= 87:
            letterGrade = 'B+'
            break;
        case percentGrade >= 84:
            letterGrade = 'B'
            break;
        case percentGrade >= 80:
            letterGrade = 'B-'
            break;
        case percentGrade >= 77:
            letterGrade = 'C+'
            break;
        case percentGrade >= 74:
            letterGrade = 'C'
            break;
        case percentGrade >= 70:
            letterGrade = 'C-'
            break;
        case percentGrade >= 67:
            letterGrade = 'D+'
            break;
        case percentGrade >= 64:
            letterGrade = 'D'
            break;
        case percentGrade >= 60:
            letterGrade = 'D-'
            break;
        case percentGrade >= 0:
            letterGrade = 'E'
            break;
        default:
            letterGrade = 'NaN'
            break;
            
    }
    
    var endGrade = document.getElementById("endGrade");
    endGrade.textContent = "Your final Grade is " + letterGrade;
})