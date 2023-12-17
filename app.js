function seatAllotment(row,numSeatsEnd,numSeats,classToAdd) {
    const seatContainer = document.querySelector(`.row-${row}`);
    for (let i = 1; i < numSeats + 1; i++){
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.classList.add(classToAdd);
        seat.id = `seat-${row}`+i;
        seat.innerText= numSeatsEnd + 1 - i;
        seatContainer.appendChild(seat);
    }
}

function Hidden(row,numSeats) {
    const seatContainer = document.querySelector(`.row-${row}`);
    for (let i = 1; i < numSeats + 1; i++){
        const seat = document.createElement('div');
        seat.classList.add('hidden');
        seatContainer.appendChild(seat);
    }
}

function rowNo(row) {
    const seatContainer = document.querySelector(`.row-${row}`);
    const rowNo = document.createElement('div');
    rowNo.classList.add('rowNo');
    rowNo.innerText = `${row}`;
    seatContainer.appendChild(rowNo);
}

rowNo('Q');
seatAllotment('Q',15,5,'available-seat');
Hidden('Q',3);
seatAllotment('Q',10,5,'available-seat');
Hidden('Q',5);
seatAllotment('Q',5,5,'available-seat');

function layout1(row) {
    rowNo(row);
    Hidden(row,1);
    seatAllotment(row,14,7,'available-seat');
    Hidden(row,6);
    seatAllotment(row,7,7,'available-seat');
}

layout1('P');
layout1('O');
layout1('N');
layout1('M');
layout1('L');
layout1('K');
layout1('G');
layout1('F');
layout1('E');
layout1('D');
layout1('C');

rowNo('J');
Hidden('J',1);
seatAllotment('J',13,7,'available-seat');
Hidden('J',6);
seatAllotment('J',7,6,'available-seat');

rowNo('I');
Hidden('I',1);
seatAllotment('I',13,7,'available-seat');
Hidden('I',6);
seatAllotment('I',7,6,'available-seat');

rowNo('H');
Hidden('H',1);
seatAllotment('H',13,7,'available-seat');
Hidden('H',6);
seatAllotment('H',7,6,'available-seat');

rowNo('B');
Hidden('B',1);
seatAllotment('B',12,7,'reserved-seat');
Hidden('B',6);
seatAllotment('B',7,5,'reserved-seat');

rowNo('A');
Hidden('A',1);
seatAllotment('A',12,7,'reserved-seat');
Hidden('A',6);
seatAllotment('A',7,5,'reserved-seat');

let soldSeats = [];
let seats = document.querySelectorAll('.seat');
seats.forEach((seat) => {
    seat.onclick = selectSeat;
})

function selectSeat(event) {
    const clickedSeat = event.target;
    seats.forEach((seat) => {
        if (seat !== clickedSeat && seat.classList.contains('selected-seat')) {
            seat.classList.remove('selected-seat');
            seat.classList.add('available-seat');
        }
    });
    clickedSeat.classList.toggle('selected-seat');
    clickedSeat.classList.toggle('available-seat');
}