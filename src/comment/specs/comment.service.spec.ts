import { Test, TestingModule } from '@nestjs/testing';
import { Comment, CommentSchema } from '../comment.model'
import { CommentService } from '../comment.service';


describe("Comment Service Unit Test", () => {
  let service: CommentService;

  beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule(
      {
        providers: [
          CommentService, {
            provide: CommentService,
            useFactory: () => ({
              getById: jest.fn().mockImplementation((_id) => {
                return [
                  _id,
                  
                ];
              }),
              getAll: jest.fn(() => true),
            }),
          }
        ],
      }).compile();
  
      service = module.get<CommentService>(CommentService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all comment', () => {
    /*
    service.getAll = jest.fn(() => { 
      return [
                {_id:"1", comment:"testing"}, 
                {_id:"2", comment:"testing 2"}
              ]
     });
     */
    expect(service.getAll()).toStrictEqual([{_id:"1", comment:"testing"}, {_id:"2", comment:"testing 2"}]);
    
  });


  it('get one', () => {
    /*
    service.getById = jest.fn().mockImplementation((_id) => {
      return [
        _id,
        
      ];
    });
    */
     expect(service.getById('1')).toBe('ok');
  });

});


/*
class MockCommentService {

  private data = [
                  {"_id":"1", "comment":"testing"},
                  {"_id":"2", "comment":"testing"}
                ];

  getById(_id) {
    for (let index in this.data){

        let curObj = this.data[index];

        if(curObj['_id'] === _id){
            return curObj;
        }
    }
  }

  getAll() {
    return this.data;
  }

  storeData() {
    return 
  }

}

describe('Test CommentService', () => {

  let service: CommentService;

  const id = '1';
  const newObj = {"_id": "3", "comment": "testing 3"};
  const singleObj = {"_id": "1", "comment": "testing 1"};
  const multiObj  = [{"_id": "1", "comment": "testing 1"}, {"_id": "2", "comment": "testing 2"}];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
    {
      providers: [CommentService],
    })
    .overrideProvider(CommentService)
    .useClass(MockCommentService)
    .compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
      expect(service).toBeDefined();
  });

  it('should get one comment by id', () => {
      expect(JSON.stringify(service.getById('1'))).toStrictEqual(JSON.stringify(singleObj));
  });

  it('should get all comment', () => {
      expect(service.getAll()).toStrictEqual(multiObj);
  });

  it('should add new obj', () => {
      expect(service.storeData(newObj)).toBe(true);
  });
  

});

*/