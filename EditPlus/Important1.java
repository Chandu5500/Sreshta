class Important1{
	static int a=10;
	static int b=20;
	int c=30;
	int d=40;
	public static void main(String[] args){
		Important1 I1=new Important1();
		System.out.println(a);
		System.out.println(b);
		//We cannot use non-static variables in static
		System.out.println(I1.c);
		System.out.println(I1.d);
	}
}