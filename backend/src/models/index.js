const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.DB_URL);

const db = client.db("treatment_support");

const Consultants = db.collection("consultants");
const Patients = db.collection('patients');
const Prescriptions = db.collection("prescriptions");
const TreatmentHistory = db.collection("treatment_history");
const MedicalRecords = db.collection("medical_records");


module.exports = {Consultants, Patients, Prescriptions, TreatmentHistory, MedicalRecords};