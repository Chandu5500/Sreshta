class Office{
	public static void main(String[] args){
		Employee e1=new Employee();
		Employee e2=new Employee();
		e1.s_no=101;
		e1.name="Chandu";
		e1.branch="ECE";
		e1.fee=25000.0;

		e2.s_no=102;
		e2.name="Teja";
		e2.branch="CSE";
		e2.fee=45000.0;

		System.out.println(e1.s_no);
		System.out.println(e1.name);
		System.out.println(e1.branch);
		System.out.println(e1.fee);
		System.out.println();
		System.out.println(e2.s_no);
		System.out.println(e2.name);
		System.out.println(e2.branch);
		System.out.println(e2.fee);
	}
}