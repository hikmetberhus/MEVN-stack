const QuestionRelation = require('../models/QuestionRelations')

module.exports = {
  up(db) {
      default_relations.map((value, index) => {
        let question = new QuestionRelation(value)

        db.collection('question_relations').insert(question)
            .then((result) => {
              if (result)
                console.log(`${index+1}. relation added`)
            })
            .catch((err) =>{
              console.log(err)
            })
      })
  },

  down(db) {
      default_relations.map((value, index) => {
        db.collection('question_relations').findOneAndDelete({question_id: value.question_id})
            .then(() => {
              console.log(`${index+1}. relation removed.`)
            })
            .catch((err) => {
              console.log(err)
            })
      })
  }
};

const default_relations = [
  {
    question_id: 1,
    parent_id: [2,3,4],
    level: 1,
    point: 50
  },
  {
    question_id: 2,
    parent_id: [5,6,3],
    level: 2,
    point: 100
  },
  {
    question_id: 3,
    parent_id: [6,9,7],
    level: 2,
    point: 100
  },
  {
    question_id: 4,
    parent_id: [3,7,8],
    level: 2,
    point: 100
  },
  {
    question_id: 5,
    parent_id: [6,10],
    level: 3,
    point: 200
  },
  {
    question_id: 6,
    parent_id: [9,10,11],
    level: 3,
    point: 200
  },
  {
    question_id: 7,
    parent_id: [9,12,13],
    level: 3,
    point: 200
  },
  {
    question_id: 8,
    parent_id: [7,13],
    level: 3,
    point: 200
  },
  {
    question_id: 9,
    parent_id: [11,12,14],
    level: 3,
    point: 200
  },
  {
    question_id: 10,
    parent_id: [11,15],
    level: 4,
    point: 400
  },
  {
    question_id: 11,
    parent_id: [14,15,16],
    level: 4,
    point: 400
  },
  {
    question_id: 12,
    parent_id: [14,17,18],
    level: 4,
    point: 400
  },
  {
    question_id: 13,
    parent_id: [12,18],
    level: 4,
    point: 400
  },
  {
    question_id: 14,
    parent_id: [16,17,19],
    level: 4,
    point: 400
  },
  {
    question_id: 15,
    parent_id: [16,20],
    level: 5,
    point: 800
  },
  {
    question_id: 16,
    parent_id: [19,20,21],
    level: 5,
    point: 800
  },
  {
    question_id: 17,
    parent_id: [19,22,23],
    level: 5,
    point: 800
  },
  {
    question_id: 18,
    parent_id: [17,23],
    level: 5,
    point: 800
  },
  {
    question_id: 19,
    parent_id: [21,22,24],
    level: 5,
    point: 800
  },
  {
    question_id: 20,
    parent_id: [21,25,26],
    level: 6,
    point: 1600
  },
  {
    question_id: 21,
    parent_id: [24,26,27],
    level: 6,
    point: 1600
  },
  {
    question_id: 22,
    parent_id: [24,28,29],
    level: 6,
    point: 1111
  },
  {
    question_id: 23,
    parent_id: [22,29,30],
    level: 6,
    point: 1600
  },
  {
    question_id: 24,
    parent_id: [27,28,31],
    level: 6,
    point: 1600
  },
  {
    question_id: 25,
    parent_id: [26],
    level: 7,
    point: 3200
  },
  {
    question_id: 26,
    parent_id: [27,32],
    level: 7,
    point: 3200
  },
  {
    question_id: 27,
    parent_id: [31,32,33],
    level: 7,
    point: 3200
  },
  {
    question_id: 28,
    parent_id: [31,34,35],
    level: 7,
    point: 3200
  },
  {
    question_id: 29,
    parent_id: [28,35],
    level: 7,
    point: 3200
  },
  {
    question_id: 30,
    parent_id: [29],
    level: 7,
    point: 3200
  },
  {
    question_id: 31,
    parent_id: [33,34,36],
    level: 7,
    point: 3200
  },
  {
    question_id: 32,
    parent_id: [33],
    level: 8,
    point: 6400
  },
  {
    question_id: 33,
    parent_id: [36],
    level: 8,
    point: 6400
  },
  {
    question_id: 34,
    parent_id: [36],
    level: 8,
    point: 6400
  },
  {
    question_id: 35,
    parent_id: [34],
    level: 8,
    point: 6400
  },
  {
    question_id: 36,
    parent_id: [],
    level: 9,
    point: 10000
  }
]