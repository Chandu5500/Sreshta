class Subtraction{
	void Sub(){
		int a=10;
		int b=20;
		int c=a-b;
		System.out.println(c);
	}
}
class Test92{
	public static void main(String[] args){
		//non-static method Sub() cannot be referenced from a static context
		//Subtraction.Sub();
		new Subtraction.Sub();
	}

}