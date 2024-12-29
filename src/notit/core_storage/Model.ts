import Query from "./Query";


export default abstract class Model {
    
    public static createQuery(): Query<typeof this>
    {
        return new Query<typeof this>();
    }
}