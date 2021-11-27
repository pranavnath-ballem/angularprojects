export class Utils{
    static shuffleArray(array: string[]): string[]{
        array.sort(() => Math.random() - 0.5);
        return array;
    }
}