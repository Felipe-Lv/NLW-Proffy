const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  // inserir dados
  proffyValue = {
    name: "Felipe Alves",
    avatar: "https://avatars.githubusercontent.com/u/104840530?v=4",
    whatsapp: 47991209228,
    bio: "A meta é alcançar estatisticas absurdas sobre o mundo DEV.",
  };
  classValue = {
    subject: "Matemática",
    cost: "500",
    // o proffy id virá pelo banco de dados
  };

  classScheduleValues = [
    // class_id virá pelo banco de dados, após cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  await createProffy(db, { proffyValue, classValue, classScheduleValues });
  // consultar dados inseridos
});
