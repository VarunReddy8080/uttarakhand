var uk_app = angular.module ('uk_app', ['ngCookies']);
uk_app.controller ('uk_ctrl', function ($scope) {
    $scope.change_question = function (new_index) {
        $scope.active = questions [new_index];
    }
    $scope.check_answer = function (option) {
        $scope.active.options [option] [1] = 'wrong';
        $scope.active.options [$scope.active.correct] [1] = 'correct';
    }
    $scope.images = ['slide-info-1.png', 'slide-info-2.png', 'slide-info-3.png', 'slide-info-4.png', 'slide-info-5.png'];
    var questions = [
        {question: '1 - On what day is Uttarakhand day celebrated?', options: ['April 30', 'July 1', 'March 26', 'November 9'], correct: 2},
        {question: '2 - What is the summer capital of Uttarakhand?', options: ['Haridwar', 'Nainital', 'Dehradun', 'Roorkee'], correct: 2},
        {question: '3 - What is the winter capital of Uttarakhand?', options: ['Rudrapur', 'Gairsain', 'Kashipur', 'Rishikesh'], correct: 1},
        {question: '4 - How many national parks are there in Uttarakhand?', options: ['3', '7', '5', '13'], correct: 1},
        {question: '5 - Which is the other official language of Uttarakhand besides Hindi?', options: ['Nepali', 'Urdu', 'Sanskrit', 'English'], correct: 2},
        {question: '6 - How many districts are there in Uttarakhand?', options: ['8', '10', '12', '13'], correct: 3},
        {question: '7 - Who was the first Chief Minister of Uttarakhand?', options: ['BS Koshyari', 'ND Tiwari', 'Nityanand Swami', 'BC Khanduri'], correct: 2},
        {question: '8 - Which is the highest mountain in Uttarakhand?', options: ['Nanda Devi', 'K2', 'Kangchenjunga', 'Chimborazo'], correct: 0},
        {question: '9 - Which river passes through the Valley of Flowers?', options: ['Alaknanda', 'Bhagirati', 'Ramganga', 'Pushpawati'], correct: 3},
        {question: '10 - Which city is also known as the \'yoga capital\' of the world?', options: ['Rishikesh', 'Dehradun', 'Nainital', 'Haridwar'], correct: 0},
        {question: '11 - When was Uttarakhand established as a seperate state?', options: ['1998', '2000', '2001', '2003'], correct: 1},
        {question: '12 - Which is the largest district in Uttarakhand by area?', options: ['Uttarkharshi', 'Pithoragarh', 'Pauri Garhwal', 'Nainital'], correct: 0}
    ];
    $scope.set = [];
    for (index in questions) {
        $scope.set.push (parseInt (index));
        for (inner in questions [index].options) {
            questions [index].options [inner] = [questions [index].options [inner], 'normal'];
        }
    }
    $scope.change_question (0);
});