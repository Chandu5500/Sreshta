package p10;
class test1{
	public static void main(String[] args){
		p8.addition.add(20,10);
		p8.subtraction.sub(20,10);
		//p9.multiplication.mul(20,10);
		//p9.division.div(20,10);
		int mres=p9.multiplication.mul(20,10);
		int dres=p9.division.div(20,10);
		System.out.println("mul res:"+mres);
		System.out.println("div res:"+dres);
		System.out.println();
		System.out.println("mul res:"+p9.multiplication.mul(20,10));
		System.out.println("div res:"+p9.division.div(20,10));
	}
}