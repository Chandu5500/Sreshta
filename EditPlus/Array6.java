class Array6{
	public static void main(String[] args){
		int[] A={2,5,4,8,7};
		for (int index=4;index>=0 ;index-- )
		{
			System.out.println("A ["+ index +"] is A value "+ A[index]);
			System.out.println();
		}
		System.out.println();
		for (int index=0;index<A.length ;index++ )
		{
			System.out.println("A ["+ index +"] is A value "+ A[index]);
			System.out.println();
		}
	}
}