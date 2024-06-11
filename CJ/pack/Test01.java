package p10;
public class Test01{
	public static void main(String[] args){
		p8.Addition.Add(20,10);
		p8.Subtraction.Sub(20,10);
		int mres=p9.Multiplication.Mul(20,10);
		int dres=p9.Division.Div(20,10);
		System.out.println("Mul res: "+mres);
		System.out.println("Div res: "+dres);
		System.out.println();
		System.out.println("Mul res: "+p9.Multiplication.Mul(20,10));
		System.out.println("Div res: "+p9.Division.Div(20,10));
	}
}