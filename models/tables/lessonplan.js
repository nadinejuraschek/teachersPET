/* eslint-disable camelcase */
export const LessonplanModel = (sequelize, DataTypes) => {
  var Lessonplan = sequelize.define(
    "Lessonplan",
    {
      // eslint-disable-next-line camelcase
      lessonplan_name: DataTypes.STRING,
      notes: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Lessonplan.associate = function(models) {
    Lessonplan.belongsTo(models.Class);
  };
  return Lessonplan;
};
