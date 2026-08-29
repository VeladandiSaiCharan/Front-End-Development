function getAverage(scores) {
    let total = 0;
     for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
     }

     return total / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    const grade = getGrade(score);

    return grade !== "F";
}

function studentMsg(scores, studentScores) {
    const average = getAverage(scores);
    const grade = getGrade(studentScores);

    if (grade !== "F"){
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}