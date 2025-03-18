window.onload = function() {
    // Skills and their levels (0-100)
    const skills = {
        html: 95,
        css: 85,
        js: 70,
        react: 60,
        node:65,
        sql:80,
        mongodb:70,
        java:75,
        springboot:85
    };

    // Set progress bars based on skill level
    const setProgressBar = (id, level) => {
        const progressBar = document.getElementById(id);
        progressBar.style.width = level + '%';
        // Change color based on skill level
        if (level >=90) {
            progressBar.style.backgroundColor = '#4caf50'; // Green for high proficiency
        } else if (level >=80 ) {
            progressBar.style.backgroundColor = '#334fff'; //  for medium proficiency
        } else if (level >=70 ) {
            progressBar.style.backgroundColor = '#33ff99'; //  for medium proficiency
        }else if (level >=60 ) {
            progressBar.style.backgroundColor = '#ff9800'; // Orange for medium proficiency
         } else {
            progressBar.style.backgroundColor = '#f44336'; // Red for low proficiency
        }
    };

    setProgressBar('html-bar', skills.html);
    setProgressBar('css-bar', skills.css);
    setProgressBar('js-bar', skills.js);
    setProgressBar('react-bar', skills.react);
    setProgressBar('node-bar', skills.node);
    setProgressBar('sql-bar', skills.sql);
    setProgressBar('java-bar', skills.java);
    setProgressBar('mongodb-bar', skills.mongodb);
    setProgressBar('springboot-bar', skills.springboot);
};
