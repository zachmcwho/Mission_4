
$("#btnSend").click(function () {
    var assignmentGrade = document.getElementById("assignment").value;
    var quizGrade = document.getElementById("quiz").value;
    var group_Grade = document.getElementById("group_project").value;
    var midtermGrade = document.getElementById("midterm").value;
    var finalGrade = document.getElementById("final").value;
    var intex = document.getElementById("intex").value;

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