from firebase import *

def main():
    content = "hello"
    db = Connect_To_Firestore()
    print('hello')
    Post(db)
    
    
    
if __name__ == "__main__":
    main()