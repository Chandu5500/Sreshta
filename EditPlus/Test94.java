class Test94{
	static int a=10;
	int b=20;
	public static void main(String[] args){
		Test94 T94_1=new Test94();
		Test94 T94_2=new Test94();
		System.out.println(T94_1.a +" "+T94_1.b);
		System.out.println(T94_2.a +" "+T94_2.b);
		T94_1.a=15;
		T94_2.b=16;
		System.out.println(T94_1.a +" "+T94_1.b);
		System.out.println(T94_2.a +" "+T94_2.b);
		
	}
}