class Trail{
	public static void main(String[] args){
		Mounika M=new Mounika();
		Mounika[] M1={new Mounika(),new Mounika()};
		System.out.println(M.S1.i);
		M1[0].S1.c='A';
		M1[1].S1.c='V';
		System.out.println(M1[0].S1.c);
		System.out.println(M1[1].S1.c);
	}
}