export const mockGovDatabase = [
{
aadhaarNumber: "123412341234",
aadhaarName: "Ravi Kumar",
aadhaarDOB: "1990-01-01",
voterId: "XYZ1234567",
voterName: "Ravi Kumar",
voterDOB: "1990-01-01",
},
{
aadhaarNumber: "987698769876",
aadhaarName: "Neha Sharma",
aadhaarDOB: "1995-03-15",
voterId: "ABC9876543",
voterName: "Neha Sharma",
voterDOB: "1995-03-15",
}
];

// Simulated API call
export const verifyIdentity = ({ aadhaarNumber, aadhaarName, aadhaarDOB, voterId, voterName, voterDOB }) => {
return new Promise((resolve, reject) => {
setTimeout(() => {
const match = mockGovDatabase.find(entry =>
entry.aadhaarNumber === aadhaarNumber &&
entry.aadhaarName.toLowerCase() === aadhaarName.toLowerCase() &&
entry.aadhaarDOB === aadhaarDOB &&
entry.voterId === voterId &&
entry.voterName.toLowerCase() === voterName.toLowerCase() &&
entry.voterDOB === voterDOB
);
if (match) {
resolve({ success: true });
} else {
reject({ success: false, message: "Aadhaar or Voter ID details do not match official records." });
}
}, 1000);
});
};