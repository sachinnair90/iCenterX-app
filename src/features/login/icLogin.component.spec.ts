import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IcLoginComponent } from './icLogin.component';
import { IcLoginService } from './shared/icLogin.service';
import { IC_LOGIN } from './shared/icLogin.model';

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

	it('should show authentication on login button click', () => {
		spyOn(component.authService, 'login').and.callThrough();

		component.onLoginClick();

		expect(component.authService.login).toHaveBeenCalled();
	});
});

// Mock of the original icLogin service
class MockIcLoginService extends IcLoginService {
	public login() {
		return null;
	}
}
