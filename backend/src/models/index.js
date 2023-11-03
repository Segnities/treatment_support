const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.DB_URL);

const db = client.db("treatment_support");

const Consultants = db.collection("consultants_info");
const Patients = db.collection('patients');
const Prescriptions = db.collection("prescriptions_info");
const TreatmentHistory = db.collection("treatment_history");
const MedicalRecords = db.collection("medical_records");
const Users = db.collection("users");

module.exports = {Consultants, Patients, Prescriptions, TreatmentHistory, MedicalRecords, Users};