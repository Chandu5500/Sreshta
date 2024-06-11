class Test95{
	public static void main(String[] args){
		Test96 T96=new Test96();
		System.out.println(Test96.a);
		System.out.println(Test96.b);
		//We cannot access non-static variables directly without variable allocation
		System.out.println(T96.c);
		System.out.println(T96.d);
	}
}