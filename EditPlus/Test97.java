class Test97{
	static int a=10;
	static int b=20;
	int c=30;
	int d=40;
	public static void main(String[] args){
		Test97 T97=new Test97();
		Test97 T97_1=null;
		Test97 T97_2;
		System.out.println(T97.c);
		System.out.println(T97_1.c);
		//System.out.println(T97_2.c); ->We must initialise First
	}
}