import { Category } from "./Category";
import { Course } from "./Course";

//relação um para muitos entre categoria e cursos
Category.hasMany(Course);
Course.belongsTo(Category);

export { Category, Course };
