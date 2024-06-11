class Using{
	public static void main(String[] args){
		Demo.Institute="Naresh IT ";
		Demo D1=new Demo();
		Demo D2=new Demo();

		D1.RollNum=101;
		D1.Course="Core Java";
		D2.RollNum=102;
		D2.Course="Adv java";

		
		System.out.println(D1.Institute);
		System.out.println(D1.RollNum);
		System.out.println(D1.Course);
		System.out.println(D2.Institute);
		System.out.println(D2.RollNum);
		System.out.println(D2.Course);
	}
}