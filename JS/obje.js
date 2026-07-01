//JS Objects
let num = 43
let namr = "Ashish"
let nums = []

//create an object  
let student = {
    stdName: "Ashish",
    stdCity: "Bsl",
    stdAddhar: 423423423423,
    hobbies: ["singing", "coading"],
    address: {
        street: "",
        hNo: 23423,
        state: ""
    }
}

console.log(student.stdName)
student.stdAddhar = 535345345
console.log(student.stdAddhar)

console.log(student['stdCity'])

console.log(Object.entries(student))
console.log(Object.keys(student))


const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        age: 18,
        grade: "12th",
        email: "aarav.sharma@example.com",
        city: "Mumbai",
        marks: 88
    },
    {
        id: 2,
        name: "Diya Patel",
        age: 17,
        grade: "11th",
        email: "diya.patel@example.com",
        city: "Ahmedabad",
        marks: 91
    },
    {
        id: 3,
        name: "Rohan Mehta",
        age: 18,
        grade: "12th",
        email: "rohan.mehta@example.com",
        city: "Pune",
        marks: 76
    },
    {
        id: 4,
        name: "Ananya Singh",
        age: 16,
        grade: "10th",
        email: "ananya.singh@example.com",
        city: "Delhi",
        marks: 95
    },
    {
        id: 5,
        name: "Kabir Verma",
        age: 17,
        grade: "11th",
        email: "kabir.verma@example.com",
        city: "Jaipur",
        marks: 84
    },
    {
        id: 6,
        name: "Isha Nair",
        age: 18,
        grade: "12th",
        email: "isha.nair@example.com",
        city: "Kochi",
        marks: 89
    },
    {
        id: 7,
        name: "Vivaan Gupta",
        age: 16,
        grade: "10th",
        email: "vivaan.gupta@example.com",
        city: "Lucknow",
        marks: 73
    },
    {
        id: 8,
        name: "Meera Joshi",
        age: 17,
        grade: "11th",
        email: "meera.joshi@example.com",
        city: "Nagpur",
        marks: 92
    },
    {
        id: 9,
        name: "Aditya Rao",
        age: 18,
        grade: "12th",
        email: "aditya.rao@example.com",
        city: "Hyderabad",
        marks: 81
    },
    {
        id: 10,
        name: "Sneha Kulkarni",
        age: 16,
        grade: "10th",
        email: "sneha.k@example.com",
        city: "Nashik",
        marks: 87
    },
    {
        id: 11,
        name: "Arjun Das",
        age: 17,
        grade: "11th",
        email: "arjun.das@example.com",
        city: "Kolkata",
        marks: 79
    },
    {
        id: 12,
        name: "Priya Reddy",
        age: 18,
        grade: "12th",
        email: "priya.reddy@example.com",
        city: "Chennai",
        marks: 94
    },
    {
        id: 13,
        name: "Rahul Yadav",
        age: 16,
        grade: "10th",
        email: "rahul.yadav@example.com",
        city: "Indore",
        marks: 68
    },
    {
        id: 14,
        name: "Neha Kapoor",
        age: 17,
        grade: "11th",
        email: "neha.kapoor@example.com",
        city: "Chandigarh",
        marks: 90
    },
    {
        id: 15,
        name: "Sahil Jain",
        age: 18,
        grade: "12th",
        email: "sahil.jain@example.com",
        city: "Bhopal",
        marks: 82
    },
    {
        id: 16,
        name: "Kavya Mishra",
        age: 16,
        grade: "10th",
        email: "kavya.mishra@example.com",
        city: "Varanasi",
        marks: 96
    },
    {
        id: 17,
        name: "Yash Thakur",
        age: 17,
        grade: "11th",
        email: "yash.thakur@example.com",
        city: "Surat",
        marks: 77
    },
    {
        id: 18,
        name: "Riya Malhotra",
        age: 18,
        grade: "12th",
        email: "riya.malhotra@example.com",
        city: "Noida",
        marks: 85
    },
    {
        id: 19,
        name: "Dev Chauhan",
        age: 16,
        grade: "10th",
        email: "dev.chauhan@example.com",
        city: "Udaipur",
        marks: 71
    },
    {
        id: 20,
        name: "Pooja Bansal",
        age: 17,
        grade: "11th",
        email: "pooja.bansal@example.com",
        city: "Amritsar",
        marks: 93
    }
];

let res = students.filter((std) => std.marks > 85)
console.log(res)

let res2 = students.find((std) => std.id == 3)
console.log(res2)  