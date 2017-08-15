import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IcLoginComponent } from './icLogin.component';
import { IcLoginService } from './shared/icLogin.service';
import { IcLogin } from './shared/icLogin.model';

describe('a icLogin component', () => {
	let component: IcLoginComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: IcLoginService, useClass: MockIcLoginService },
				IcLoginComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([IcLoginComponent], (IcLoginComponent) => {
		component = IcLoginComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original icLogin service
class MockIcLoginService extends IcLoginService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
