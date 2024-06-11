class Var{
	public static void main(String[] args){
		int a=10;
		int b=m1();
		System.out.println(a);
		System.out.println(b);

		String s1="String";
		String s2=new String("String");
		point p =new point();
		System.out.println(p.a);
		System.out.println(p.b);
		System.out.println(s1);
		System.out.println(s2);
	}
	static int m1(){
		return 55;
	}
}

